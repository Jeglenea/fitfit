import React, { useState } from 'react'
import './UserPanel.css';
import Calendar from 'react-calendar'
import './Calendar.css';

function UserPanel(){
    const [value, onChange] = useState(new Date());
    const linking = () => {
      //bi veri gönderimi söz konusu değil. Sadece sayfa değişimi yapılıyor.
      window.location = "/userprogress"
    }
    return(
        <div className="userPanel">
          <div className="userPanel__calendarContainer">
            {/*https://www.npmjs.com/package/react-calendar  css dosyası src'ye çekildi. diğer türlü customize edilmiyordu.*/}
            <Calendar onChange={onChange} value={value} locale='en-EN' onClickDay={linking}/>
            {console.log(value)}
            {value.toString()}
          </div>
        </div>
    );
}

export default UserPanel;