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
        "Balance/Agility, Cardiovascular, Low Impact, Pilates, Strength Training, Toning, Stretching/Flexibility",
      equipment: "Dumbbell",
    },
    {
      id: "4903850",
      title: "High Protein Diet Program",
      price: 199.99,
      rating: 3,
      image: diet01,
      type: "diet",
    },
    {
      id: "23445930",
      title: "Keto Diet Program",
      price: 98.99,
      rating: 5,
      image: diet02,
      type: "diet",
    },
    {
      id: "3254354345",
      title: "Low Carbohydrate Diet Program",
      price: 598.99,
      rating: 4,
      image: diet03,
      type: "diet",
    },
    {
      id: "90829332",
      title: "Intermittent Fasting Diet",
      price: 94.98,
      rating: 3,
      image: diet04,
      type: "diet",
    },
  ];

 


  const handleClick = (id) => {
    const selectedProduct = product.find((item) => item.id === id);
    // buton id eklenip learn more butonlarına id eklenip getirebilir
    // Verileri alın ve ekrana yazdırın
    if (selectedProduct) {
      const dataContainer = document.querySelector("#dataContainer");
      
      dataContainer.innerHTML = `
        <p>ID: ${selectedProduct.id}</p>
        <p>Title: ${selectedProduct.title}</p>
        <p>Price: ${selectedProduct.price}</p>
        <p>Rating: ${selectedProduct.rating}</p>
        <img src="${selectedProduct.image}" alt="Product Image">
        <p>Type: ${selectedProduct.type}</p>
      `;
    }
  };
  const hidePopup = () => {
    const modal = document.getElementById("popup");
    modal.classList.remove("show");
  };

  const popupModal = (index) => {
    const selectedProduct = product.find((item) => item.id === index);

    if (!selectedProduct) {
      return null;
    }
    return (
      <div className="modal-popup" id="popup">
        <div className="modal-blocker" onClick={hidePopup}></div>
        <div
          class="modal-fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content" id="modal-display">
              <div class="modal-body">
                <div class="column" id="main">
                  <Product
                    id={selectedProduct.id}
                    title={selectedProduct.title}
                    price={selectedProduct.price}
                    rating={selectedProduct.rating}
                    image={selectedProduct.image}
                    type="workout"
                    difficulty={4}
                    dailyDuration=" Avg. 38 Minutes -
                            Min. 32 Minutes -
                            Max. 45 Minutes"
                    totalDuration="4 Weeks"
                    bodyFocus="Total Body"
                    trainingType="Balance/Agility, Cardiovascular, HIIT, Pilates, Strength Training, Toning"
                    equipment="Dumbbell"
                  />
                  <div class="moreinfo info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed finibus fermentum dui, finibus varius felis placerat
                      in. Etiam eget erat eu nulla tincidunt tincidunt. Cras
                      porttitor faucibus arcu, vitae hendrerit mauris convallis
                      ut. Nulla ut cursus ex. Suspendisse ultricies neque non
                      luctus tempor.
                    </p>
                  </div>
                </div>
                <div>
                  <svg width="67px" height="578px" viewBox="0 0 67 578">
                    <title>Path</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z"
                        id="Path"
                        fill="#F9BC35"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div class="column" id="secondary">
                  <div class="sec-content">
                    <h2>Welcome Back!</h2>
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h3>
                    <button type="button" class="btn btn-primary">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={fitfit_background} />

        <div className="home__row">
          <div className="home__outerproduct">
            {/* burada verileri db üzerinden çekip onları ekleyebiliriz. title price image rating için */}
            <Product
              id="12321341"
              title="FB Blend - Burn Fat, Build Muscle, Tone; 35 or 55 Minutes a Day"
              price={11.96}
              rating={5}
              image={fitness01}
              type="workout"
              difficulty={4}
              dailyDuration=" Avg. 38 Minutes -
                            Min. 32 Minutes -
                            Max. 45 Minutes"
              totalDuration="4 Weeks"
              bodyFocus="Total Body"
              trainingType="Balance/Agility, Cardiovascular, HIIT, Pilates, Strength Training, Toning"
              equipment="Dumbbell"
            />
            <button id="myButton"
              className="home__itembtn"
              onClick={() => handleClick("12321341")}>
              Learn More
            </button>
          </div>
          <div className="home__outerproduct">
            <Product
              id="49538094"
              title="FB Low Impact Round 2 - Build Muscle & Burn Fat - 40 Minutes or Less"
              price={239.0}
              rating={4}
              image={fitness02}
              type="workout"
              difficulty={3}
              dailyDuration="Avg. 34 Minutes -
                           Min. 27 Minutes -
                           Max. 40 Minutes"
              totalDuration="4 Weeks"
              bodyFocus="Total Body"
              trainingType="Balance/Agility, Cardiovascular, Low Impact, Pilates, Strength Training, Toning, Stretching/Flexibility"
              equipment="Dumbbell"
            />
            <button id="myButton"
              className="home__itembtn"
              onClick={() => handleClick("49538094")}>
              Learn More
            </button>
          </div>
        </div>
        <div className="home__row">
          <div className="home__outerproduct">
            <Product
              id="4903850"
              title="High Protein Diet Program"
              price={199.99}
              rating={3}
              image={diet01}
            />
            <button id="myButton"
              className="home__itembtn"
              onClick={() => handleClick("4903850")}>
              Learn More
            </button>
          </div>
          <div className="home__outerproduct">
            <Product
              id="23445930"
              title="Keto Diet Program"
              price={98.99}
              rating={5}
              image={diet02}
            />
            <button id="myButton"
              className="home__itembtn"
              onClick={() => handleClick("23445930")}>
              Learn More
            </button>
          </div>
          <div className="home__outerproduct">
            <Product
              id="3254354345"
              title="Low Carbohydrate Diet Program"
              price={598.99}
              rating={4}
              image={diet03}
            />
            <button id="myButton"
              className="home__itembtn"
              onClick={() => handleClick("3254354345")}>
              Learn More
            </button>
          </div>
        </div>
        <div className="home__row">
          <div className="home__outerproduct">
            <Product
              id="90829332"
              title="Intermittent Fasting Diet"
              price={1094.98}
              rating={3}
              image={diet04}
            />
            <button
              id="myButton"
              className="home__itembtn"
              onClick={() => handleClick("90829332")}
            >
              Learn More
            </button>
            <div id="dataContainer">

            </div>
          </div>
        </div>
        <div className="home__rowxd">
          <div>{popupModal("49538094")}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
