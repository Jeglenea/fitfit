import React from 'react'
import './AccountPanel.css';
import 'charts.css';

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

                </div>
                <div className="accountPanel__box1">

                    <table class="charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes data-spacing-15 hide-data">

                    <caption> Daily Nutrition Chart </caption>

                    <thead>
                    <tr>
                        <th scope="col"> Year </th>
                        <th scope="col"> Value </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th> 2014 </th>
                        <td style={{size: calc(2/10)}}></td>
                    </tr>
                    <tr>
                        <th> 2017 </th>
                        <td style={{size:0.4}}></td>
                    </tr>
                    <tr>
                        <th> 2018 </th>
                        <td style={{size:0.6}}></td>
                    </tr>
                    <tr>
                        <th> 2019 </th>
                        <td style={{size:0.8}}></td>
                    </tr>
                    <tr>
                        <th> 2020 </th>
                        <td style={{size:1.0}}></td>
                    </tr>
                    </tbody>

                    </table>
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