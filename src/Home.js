import React from "react";
import "./Home.css";
import Product from "./Product";
import fitfit_background from "./img/background.jpg";
import fitness01 from "./img/fitness 01.jpg";
import fitness02 from "./img/fitness 02.jpg";
import diet01 from "./img/guide-high-protein-diet.jpg";
import diet02 from "./img/guide-keto-diet.jpg";
import diet03 from "./img/guide-low-carb-foods.jpg";
import diet04 from "./img/guide-time-restricted-eating.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src= {fitfit_background}
        />

        <div className="home__row">
          {/* burada verileri db üzerinden çekip onları ekleyebiliriz. title price image rating için */}
          <Product
            id="12321341"
            title="FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day"
            price={11.96}
            rating={5}
            image={fitness01}
          />
          <Product
            id="49538094"
            title="FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less"
            price={239.0}
            rating={4}
            image={fitness02}
          />
        </div>
        <div className="home__row">
        <Product
            id="4903850"
            title="High Protein Diet Program"
            price={199.99}
            rating={3}
            image={diet01}
          />
          <Product
            id="23445930"
            title="Keto Diet Program"
            price={98.99}
            rating={5}
            image={diet02}
          />
          <Product
            id="3254354345"
            title="Low Carbohydrate Diet Program"
            price={598.99}
            rating={4}
            image={diet03}
          />
        </div>
        <div className="home__row">
        <Product
            id="90829332"
            title="Intermittent Fasting Diet"
            price={1094.98}
            rating={3}
            image={diet04}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
