import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Banner from './img/banner.png';

{/*Checkout sayfamız 2 ye ayrılıyor. Left -> Orders, Right-> Complete */}

function Checkout() {
  const[{basket, user }, dispatch] = useStateValue();

  return( 
  <div className="checkout">
    <div className="checkout_left"> {/*Alt satırdak src'deki fotoğraf değiştirilmeli. */}

    <div>
        <h3 className="checkout_hi">Hello, {user?.email}</h3>
        <h2 className="checkout_title">
            Your Shopping Basket
        </h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating} 
            />
          ))}

            {/*Checkout Product*/}
            {/*Checkout Product*/}
            {/*Checkout Product*/}
            {/*Checkout Product*/}

    </div>
    </div>

    <div className="checkout_right">
        <Subtotal />
    </div>

  </div>

  );
}

export default Checkout