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
import { useStateValue } from './StateProvider';


function Home() {


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

  const handleClick = () => {
    const modal = document.getElementById("popup");
    modal.classList.add("show");
  };
  const hidePopup = () => {
    const modal = document.getElementById("popup");
    modal.classList.remove("show");
  };


  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={fitfit_background} />

        <div className="home__row">
          <div className="home__outerproduct">
            {/* burada verileri db üzerinden çekip onları ekleyebiliriz. title price image rating için */}
            <Product
              id= {product[0].id}
              title={product[0].title}
              price={product[0].price}
              rating={product[0].rating}
              image={product[0].image}
              type={product[0].type}
              difficulty={product[0].difficulty}
              dailyDuration={product[0].dailyDuration}
              totalDuration={product[0].totalDuration}
              bodyFocus={product[0].bodyFocus}
              trainingType={product[0].trainingType}
              equipment= {product[0].equipment}
            />
            
          </div>
          <div className="home__outerproduct">
            <Product
              id= {product[1].id}
              title={product[1].title}
              price={product[1].price}
              rating={product[1].rating}
              image={product[1].image}
              type={product[1].type}
              difficulty={product[1].difficulty}
              dailyDuration={product[1].dailyDuration}
              totalDuration={product[1].totalDuration}
              bodyFocus={product[1].bodyFocus}
              trainingType={product[1].trainingType}
              equipment= {product[1].equipment}
            />
            
          </div>
        </div>
        <div className="home__row">
          <div className="home__outerproduct">
            <Product
              id= {product[2].id}
              title={product[2].title}
              price={product[2].price}
              rating={product[2].rating}
              image={product[2].image}
              type={product[2].type}
              difficulty={product[2].difficulty}
              totalDuration={product[2].totalDuration}
            />
            
          </div>
          <div className="home__outerproduct">
            <Product
              id= {product[3].id}
              title={product[3].title}
              price={product[3].price}
              rating={product[3].rating}
              image={product[3].image}
              type={product[3].type}
              difficulty={product[3].difficulty}
              totalDuration={product[3].totalDuration}
            />
            
          </div>
          <div className="home__outerproduct">
            <Product
              id= {product[4].id}
              title={product[4].title}
              price={product[4].price}
              rating={product[4].rating}
              image={product[4].image}
              type={product[4].type}
              difficulty={product[4].difficulty}
              totalDuration={product[4].totalDuration}
            />
            
          </div>
        </div>
        <div className="home__row">
          <div className="home__outerproduct">
            <Product
              id= {product[5].id}
              title={product[5].title}
              price={product[5].price}
              rating={product[5].rating}
              image={product[5].image}
              type={product[5].type}
              difficulty={product[5].difficulty}
              totalDuration={product[5].totalDuration}
            />
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
