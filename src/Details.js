import React from 'react'
import './Details.css'
import ErrorIcon from '@mui/icons-material/Error';
import { useStateValue } from './StateProvider';



function Details() {
    const [{ detail }, dispatch] = useStateValue();



    return (
        <div className='details__container'>
            <div className='details__innerContainer'>
                <div className='details__leftColumn'>

                    <img src={detail.image} />
                    <p>Total Duration: {detail.totalDuration}</p>
                    <p className='difficulty__container'>Difficulty: {Array(detail.difficulty).fill().map((_, i) => (<p className='difficulty__icon'><ErrorIcon /></p>))}</p>
                    <p>Daily Duration: {detail.dailyDuration}</p>
                    <p>Body Focus: {detail.bodyFocus}</p>
                    <p>Training Type: {detail.trainingType}</p>
                    <p>Equiment: {detail.equipment}</p>
                    
                </div>
                <div className='details__rightColumn'>
                    <p className='details__title'>{detail.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Details
