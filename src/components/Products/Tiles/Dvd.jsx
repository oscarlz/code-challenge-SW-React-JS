import React from 'react'

const Dvd = ({product}) => {
    const {
        id,
        name,
        sku,
        price,
        size
     }  = product
    
      return (
        <div className='tile'>
            <div className='checkbox'><input type="checkbox" productid={id} className="delete-checkbox"></input></div>
            <div>{name}</div>
            <div>{sku}</div>
            <div>{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} $</div>
            <div>Size: {size} MB</div>
        </div>
      )
    }

export default Dvd