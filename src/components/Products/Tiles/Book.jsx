import React from 'react'

const Book = ({product}) => {
    const {
        id,
        title,
        sku,
        price,
        weight
     }  = product

    
      return (
        <div className='tile'>
            <div className='checkbox'><input type="checkbox" productid={id} className="delete-checkbox"></input></div>
            <div>{title}</div>
            <div>{sku}</div>
            <div>{price}</div>
            <div>Weight: {weight} KG</div>
        </div>
      )
}

export default Book