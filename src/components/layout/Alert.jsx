import React from 'react'

const Alert = ({ alert }) => {
    
  if(alert.show == false) return <></> // Early return

  return (
    <div className='alert'>
        {alert.show ? alert.alertMsg : ''}
    </div>
  )
}

export default Alert