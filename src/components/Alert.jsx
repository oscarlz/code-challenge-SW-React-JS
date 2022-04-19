import React from 'react'

const Alert = ({ alertStatus }) => {
    let alertMsg = '';
    
    if(alertStatus == 0) return <></> //early return

    if(alertStatus === 1){
        alertMsg = 'All the fields are required. Please fill them.'
    }else if(alertStatus === 2){
        alertMsg = 'SKU not valid, please use another.'
    }

  return (
    <div className='alert'>
        {alertMsg}
    </div>
  )
}

export default Alert