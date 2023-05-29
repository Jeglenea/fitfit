import "./App.css";
import Header from './Header'
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } 
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes> {/*Kullandığımız react-router-dom güncel, eski versiyonda Switch ile yapılıyordu.*/}
          <Route path="/login" element={<Login />}/>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} /> {/*!!!!Home route'unun en altta kaldığından emin olun.!!!!*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
