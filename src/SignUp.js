import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import database from "./firebase";
import fitfit_logo from "./img/logo new.png";

function Login() {
  // history => navigate
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("0");
  const [weight, setWeight] = useState("0");
  const [isConsultant, setConsultant] = useState("");

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          const newUserRef = database.ref("user").push();

          newUserRef
            .set({
              email: email,
              name: name,
              date: date,
              gender: gender,
              height: height,
              weight: weight,
              isConsultant: isConsultant,
            })
            .catch(alert);

          navigate("/Login");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={fitfit_logo} />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <hr></hr>
        <h2>Additional Information</h2>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h5>Birthday</h5>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            max="2023-12-31"
          />
          <h5>Gender</h5>
          <div className="radio">
            <input
              type="radio"
              value="Male"
              id="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
            />
            <label htmlFor="Male">Male</label>

            <input
              type="radio"
              value="Female"
              id="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
            />
            <label htmlFor="Female">Female</label>

            <input
              type="radio"
              value="AttackHelicopter"
              id="AttackHelicopter"
              checked={gender === "AttackHelicopter"}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
            />
            <label htmlFor="AttackHelicopter">Attack Helicopter</label>
          </div>
          <h5>Height (cm)</h5>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            min="1"
            max="250"
          />
          <h5>Weight (kg)</h5>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            min="1"
            max="500"
          />
          <div className="consultant_container">
            <h5>Are you a consultant?</h5>
            <input
              type="checkbox"
              value="isConsultant"
              id="isConsultant"
              checked={isConsultant.includes("isConsultant")}
              onChange={(e) => {
                if (e.target.checked) {
                  setConsultant([...isConsultant, e.target.value]);
                } else {
                  setConsultant(
                    isConsultant.filter((item) => item !== e.target.value)
                  );
                }
              }}
            />
          </div>
          <button onClick={register} className="login__registerButton">
            Create your fitfit Account
          </button>
        </form>
        <p>
          By signing-in you agree to the fitfit Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;