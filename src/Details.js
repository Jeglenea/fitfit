import React from 'react'
import './Details.css'
import ErrorIcon from '@mui/icons-material/Error';
import { useStateValue } from './StateProvider';



function Details() {
    const [{ detail }, dispatch] = useStateValue();


    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
          type: 'ADD_TO_BASKET',
          item: {
            id: detail.id,
            title: detail.title,
            image: detail.image,
            price: detail.price,
            rating: detail.rating,
            type: detail.type,  //workout & diet
    
            //workout special
            difficulty: detail.difficulty,
            dailyDuration: detail.dailyDuration,
            totalDuration: detail.totalDuration,
            bodyFocus: detail.bodyFocus,
            trainingType: detail.trainingType,
            equipment: detail.equipment,
          },
        });
      };



    return (
        <div className='details__container'>
            <div className='details__innerContainer'>
                <div className='details__firstColumn'>
                    <p className='details__title'>{detail.title}</p>
                    <img src={detail.image} />
                    <div className='detail__texts'>
                        <p>Total Duration: <p className='detail__product'>{detail.totalDuration}</p></p>
                        <p className='difficulty__container'>Difficulty: {Array(detail.difficulty).fill().map((_, i) => (<p className='difficulty__icon'><ErrorIcon /></p>))}</p>
                        <p>Daily Duration: <p className='detail__product'>{detail.dailyDuration}</p></p>
                        <p>Body Focus: <p className='detail__product'>{detail.bodyFocus}</p></p>
                        <p>Training Type: <p className='detail__product'>{detail.trainingType}</p></p>
                        <p>Equiment: <p className='detail__product'>{detail.equipment}</p></p>
                    </div>
                </div>
                <div className='details__secondColumn'>
                    <span>Available for Purchase: <p>{detail.price}$</p></span>
                    <button className='details__basketBtn' onClick={addToBasket}>Add to Basket</button>
                </div>
            </div>
        </div>
    )
}

export default Details
