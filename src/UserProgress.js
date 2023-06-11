import React from 'react'
import './UserProgress.css';
import 'charts.css';
import {CircleProgress} from 'react-gradient-progress'

function UserProgress() {

    return (
        <div className="userProgress">
          <div className="userProgress__container">
            <p> dd/mm/yyyy Progress</p>
            <div className="userProgress__firstrow">
                <div className="userProgress__box">
                    <span className="userProgress_innerbox">
                        <p>136</p>
                        <p>g</p>
                    </span>
                    <p>
                        PROTEIN
                    </p>
                </div>
                <div className="userProgress__box">
                    <span className="userProgress_innerbox">
                        <p>236</p>
                        <p>g</p>
                    </span>
                    <p>
                        CARBONHYDRATE
                    </p>
                </div>
                <div className="userProgress__box">
                    <span className="userProgress_innerbox">
                        <p>83</p>
                        <p>g</p>
                    </span>
                    <p>
                        FAT
                    </p>
                </div>
            </div>
            <div className="userProgress__row">
                <div className="userProgress__box1">
                    <div className="userProgress__circlechart">
                        <div className="userProgress__paragraph">
                            <p>Total Calories</p>
                            <p>Today</p>
                        </div>
                        <div className="userProgress__innercirclechart">
                            <CircleProgress percentage={75} strokeWidth={10} primaryColor={['#04ac94', '#d0eee9']} width={225} fontSize={24}/>
                        </div>
                        <div className="userProgress__endparagraph">
                            <p>You burned 2000 cal today</p>
                        </div>  
                    </div>
                    
                </div>
                <div className="userProgress__box1">

                </div>
            </div>
            <div className="userProgress__row">
                <div className="userProgress__box1">

                </div>
                <div className="userProgress__box1">
                    
                </div>
            </div>
          </div>
        </div>
    ); 
}

export default UserProgress;