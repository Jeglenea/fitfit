import React, { useState, useEffect } from "react";
import "./Consultant.css";
import ConsultantPatientList from "./ConsultantPatientList";
import ConsultantPlanList from "./ConsultantPlanList";
import fitness01 from "./img/fitness 01.jpg";
import fitness02 from "./img/fitness 02.jpg";
import diet01 from "./img/guide-high-protein-diet.jpg";
import diet02 from "./img/guide-keto-diet.jpg";
import diet03 from "./img/guide-low-carb-foods.jpg";
import diet04 from "./img/guide-time-restricted-eating.jpg";
import { useStateValue } from "./StateProvider";
import database from "./firebase";

function Consultant() {
  const [{ user }, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const usr = [
    {
      id: "12321341",
      email: "Kem4l@gmail.com",
      name: "Kemal",
    },
    {
      id: "45342534",
      email: "Hayr1@gmail.com",
      name: "Hayri",
    },
    {
      id: "64323452",
      email: "0sm4n@gmail.com",
      name: "Osman",
    },
    {
      id: "65434534",
      email: "N4z1fe@gmail.com",
      name: "Nazife",
    },
    {
      id: "76545454",
      email: "4ysun@gmail.com",
      name: "Aysun",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await database.ref("user").once("value");
      const snapshot2 = await database.ref("product").once("value");
      const usersData = snapshot.val();
      if (usersData) {
        const usersArray = Object.values(usersData);
        setUsers(usersArray);
      }
      const productsData = snapshot2.val();
      if (productsData) {
        const productsArray = Object.values(productsData);
        setProducts(productsArray);
      }

    };

    fetchData();
  }, []);

  const product = [
    {
      id: "12321341",
      title: "FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day",
      price: 11.99,
      rating: 5,
      image: fitness01,
      type: "workout",
      difficulty: 4,
      dailyDuration: " Avg. 38 Minutes - Min. 32 Minutes - Max. 45 Minutes",
      totalDuration: "4 Weeks",
      bodyFocus: "Total Body",
      trainingType:
        "Balance/Agility, Cardiovascular, HIIT, Pilates, Strength Training, Toning",
      equipment: "Dumbbell",
    },
    {
      id: "49538094",
      title:
        "FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less",
      price: 239.0,
      rating: 4,
      image: fitness02,
      type: "workout",
      difficulty: 3,
      dailyDuration: " Avg. 34 Minutes - Min. 27 Minutes - Max. 40 Minutes",
      totalDuration: "4 Weeks",
      bodyFocus: "Total Body",
      trainingType:
        "Balance/Agility, Cardiovascular, Low Impact, Pilates, Strength Training, Toning",
      equipment: "Dumbbell",
    },
    {
      id: "4903850",
      title: "High Protein Diet Program",
      price: 199.99,
      rating: 3,
      image: diet01,
      type: "diet",
      difficulty: 1,
      totalDuration: "4 Weeks",
    },
    {
      id: "23445930",
      title: "Keto Diet Program",
      price: 98.99,
      rating: 5,
      image: diet02,
      type: "diet",
      difficulty: 3,
      totalDuration: "4 Weeks",
    },
    {
      id: "3254354345",
      title: "Low Carbohydrate Diet Program",
      price: 598.99,
      rating: 4,
      image: diet03,
      type: "diet",
      difficulty: 4,
      totalDuration: "4 Weeks",
    },
    {
      id: "90829332",
      title: "Intermittent Fasting Diet",
      price: 94.98,
      rating: 3,
      image: diet04,
      type: "diet",
      difficulty: 5,
      totalDuration: "4 Weeks",
    },
  ];

  return (
    <div className="consultant">
      <div className="consultant__container">
        <h3>Hello</h3>
        <div className="consultant__innerContainer">
          <div className="consultant__leftContainer">
            <div className="consultant__leftContainer__first"></div>
            <div className="consultant__leftContainer__second">
              <div className="consultant__planLists">
              {products.map((product, index) => (
                <ConsultantPlanList key={index}
                title={product.title}
                price={product.price}
                rating={product.rating}
                type={product.type}
                difficulty={product.difficulty}
                dailyDuration={product.dailyDuration}
                totalDuration={product.totalDuration}
                bodyFocus={product.bodyFocus}
                trainingType={product.trainingType}
                equipment={product.equipment}

                />
              ))}
              </div>
              <div className="consultant__planListsBtnContainer">
                <button className="consultant__planListsBtn">
                  Create New Plan
                </button>
              </div>
            </div>
          </div>
          <div className="consultant__rightContainer">
            <div className="consultant__patientList">
              <p>Patients</p>
              {users.map((user, index) => (
                <ConsultantPatientList key={index}
                email={user.email}
                name={user.name}
                />
              ))}
            </div>
            <div className="consultant__patientListBtnContainer">
              <button className="consultant__patientListBtn">Edit</button>
              <button className="consultant__patientListBtn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultant;