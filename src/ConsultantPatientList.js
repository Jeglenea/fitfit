import React from 'react'
import './ConsultantPatientList.css';

function ConsultantPatientList({id, name, email}) {
  return (
    <div className='consultantPatientList'>
        <p>{name}</p>
        <p>{email}</p>
    </div>
  )
}

export default ConsultantPatientList