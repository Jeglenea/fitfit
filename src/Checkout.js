import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

{/*Checkout sayfamız 2 ye ayrılıyor. Left -> Orders, Right-> Complete */}

function Checkout() {
  const[{basket, user }, dispatch] = useStateValue();

  return( 
  <div className="checkout">
    <div className="checkout_left"> {/*Alt satırdak src'deki fotoğraf değiştirilmeli. */}
        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

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