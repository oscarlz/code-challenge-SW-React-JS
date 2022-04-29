import React from 'react'
import Dvd from './Tiles/Dvd'
import Furniture from './Tiles/Furniture'
import Book from './Tiles/Book'

const ProductTile = ({product}) => {
  let productTile = null

 switch(product.type_code){
   case 'DVD':
    productTile = <Dvd product={product} />
    break;

   case 'FURNITURE':
    productTile = <Furniture product={product} />
    break;

   case 'BOOK':
    productTile = <Book product={product} />
    break;
 }

  return (
    <>
        {productTile}
    </>
    
  )
}

export default ProductTile