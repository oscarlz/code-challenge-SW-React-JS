import React from 'react'

const Book = ({product}) => {
    const {
        id,
        name,
        sku,
        price,
        weight
     }  = product

      return (
        <div className='tile'>
            <div className='checkbox'><input type="checkbox" productid={id} className="delete-checkbox"></input></div>
            <div>{name}</div>
            <div>{sku}</div>
            <div>{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} $</div>
            <div>Weight: {weight} KG</div>
        </div>
      )
}

export default Book