import React from 'react'
import Dvd from './Tiles/Dvd'
import Furniture from './Tiles/Furniture'
import Book from './Tiles/Book'

const ProductsTile = ({product}) => {
  let productTile = ''

 switch(product.type){
   case 'DVD':
    productTile = <Dvd product={product} />
    break;

   case 'Furniture':
    productTile = <Furniture product={product} />
    break;

   case 'Book':
    productTile = <Book product={product} />
    break;

 }

  return (
    <>
        {productTile}
    </>
    
  )
}

export default ProductsTile