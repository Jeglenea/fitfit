import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
  const[basket, dispatch] = useStateValue();

  console.log("This is basket:", basket);

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TOBASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
        <div className='productinfo'>
            <p className="productname">
               {title}
            </p>
            <p className='productprice'>
                <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className='productrating'>
              {/* burada yarım yıldız ve boş yıldız kullanıp bir düzen yapabiliriz bunların verisini gene db'den alırız EKLEME: Rating arrayini CheckoutProduct.js kısmında da kullandık. yarım yıldız mevzusunu oraya da eklememiz gerekir. */}
            {Array(rating).fill().map((_, i) => (<p><StarIcon/></p>))}
            </div>
        </div>
        <img src={image}/>
        <button onClick={addToBasket}>Learn More</button>
    </div>
  )
}

export default Product