import React from 'react'

const Furniture = ({product}) => {
    const {
        id,
        title,
        sku,
        price,
        height,
        width,
        length
     }  = product

    
      return (
        <div className='tile'>
            <div className='checkbox'><input type="checkbox" productid={id} className="delete-checkbox"></input></div>
            <div>{title}</div>
            <div>{sku}</div>
            <div>{price}</div>
            <div>Dimensions (HxWxL): {height}x{width}x{length}</div>
        </div>
      )
}

export default Furniture