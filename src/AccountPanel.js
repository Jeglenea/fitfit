import React from 'react'
import './AccountPanel.css';
import 'charts.css';
import {CircleProgress} from 'react-gradient-progress'

function AccountPanel() {

    return (
        <div className="accountPanel">
          <div className="accountPanel__container">
            <p> dd/mm/yyyy Progress</p>
            <div className="accountPanel__firstrow">
                <div className="accountPanel__box">
                    <span className="accountPanel_innerbox">
                        <p>136</p>
                        <p>g</p>
                    </span>
                    <p>
                        PROTEIN
                    </p>
                </div>
                <div className="accountPanel__box">
                    <span className="accountPanel_innerbox">
                        <p>236</p>
                        <p>g</p>
                    </span>
                    <p>
                        CARBONHYDRATE
                    </p>
                </div>
                <div className="accountPanel__box">
                    <span className="accountPanel_innerbox">
                        <p>83</p>
                        <p>g</p>
                    </span>
                    <p>
                        FAT
                    </p>
                </div>
            </div>
            <div className="accountPanel__row">
                <div className="accountPanel__box1">
                    <div className="accountPanel__circlechart">
                        <div className="accountPanel__paragraph">
                            <p>Total Calories</p>
                            <p>Today</p>
                        </div>
                        <div className="accountPanel__innercirclechart">
                            <CircleProgress percentage={75} strokeWidth={10} primaryColor={['#04ac94', '#d0eee9']} width={225} fontSize={24}/>
                        </div>
                        <div className="accountPanel__endparagraph">
                            <p>You burned 2000 cal today</p>
                        </div>  
                    </div>
                    
                </div>
                <div className="accountPanel__box1">

                </div>
            </div>
            <div className="accountPanel__row">
                <div className="accountPanel__box1">

                </div>
                <div className="accountPanel__box1">
                    
                </div>
            </div>
          </div>
        </div>
    ); 
}

export default AccountPanel;