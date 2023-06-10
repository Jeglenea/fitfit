import React, { useEffect } from "react";
import "./App.css";
import Header from './Header'
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } 
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import SignUp from "./SignUp";
import AccountPanel from "./AccountPanel";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come Back ;("
    
  })
  window.addEventListener("focus", () => {
    document.title = docTitle
  })
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes> {/*Kullandığımız react-router-dom güncel, eski versiyonda Switch ile yapılıyordu.*/}
          <Route path="/login" element={<Login />}/>
          <Route path="/checkout" element={<><Header /><Checkout /></>}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/accountPanel" element={<><Header/><AccountPanel/></>}/>
          <Route path="/" element={<><Header /><Home /></>} /> {/*!!!!Home route'unun en altta kaldığından emin olun.!!!!*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
