import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';

function Product({id,title,image,price,rating}) {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>
               {title}
            </p>
            <p className='product__price'>
                <small>₺</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
              {/* burada yarım yıldız ve boş yıldız kullanıp bir düzen yapabiliriz bunların verisini gene db'den alırız  */}
            {Array(rating).fill().map((_, i) => (<p><StarIcon/></p>))}
            </div>
        </div>
        <img src={image}/>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product