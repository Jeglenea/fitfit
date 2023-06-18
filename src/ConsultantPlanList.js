import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './ConsultantPlanList.css'
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function ConsultantPlanList({ id, title, image, price, rating, type, difficulty, dailyDuration, totalDuration, bodyFocus, trainingType, equipment }) {
    const [{ detail }, dispatch] = useStateValue();

    const goDetails = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'GO_DETAILS',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                type: type,  //workout & diet

                //workout special
                difficulty: difficulty,
                dailyDuration: dailyDuration,
                totalDuration: totalDuration,
                bodyFocus: bodyFocus,
                trainingType: trainingType,
                equipment: equipment,
            },
        });
    };

    return (
        <div className="consultantPlanList">
            <img className='consultantPlanList__image' src={image} />

            <div className="consultantPlanList__info">
                <p className='consultantPlanList__title'>{title}</p>
                <p className="consultantPlanList__price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="consultantPlanList__rating">
                    {Array(rating).fill().map((_, i) => (<p><StarIcon /></p>))}

                </div>

                <Link to={"/details"}>
                    <button className='consultantPlanList__btn' onClick={goDetails}>Details</button>
                </Link>

            </div>


        </div>


    )
}

export default ConsultantPlanList