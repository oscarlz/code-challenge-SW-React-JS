import React from 'react'

const Dvd = ({product}) => {
    const {
        id,
        title,
        sku,
        price,
        size
     }  = product

    
      return (
        <div className='tile'>
            <div className='checkbox'><input type="checkbox" productid={id} className="delete-checkbox"></input></div>
            <div>{title}</div>
            <div>{sku}</div>
            <div>{price}</div>
            <div>Size: {size} MB</div>
        </div>
      )
    }

export default Dvd