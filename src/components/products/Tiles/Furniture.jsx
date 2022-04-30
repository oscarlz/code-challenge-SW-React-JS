import React from 'react'

const Furniture = ({product}) => {
    const {
        id,
        name,
        sku,
        price,
        height,
        width,
        length
     }  = product
    
      return (
        <div className='tile'>
            <div className='checkbox'><input type="checkbox" productid={id} className="delete-checkbox"></input></div>
            <div>{sku}</div>
            <div>{name}</div>
            <div>{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} $</div>
            <div>Dimensions (HxWxL): {height}x{width}x{length}</div>
        </div>
      )
}

export default Furniture