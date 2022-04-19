import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Topbar = () => {

    const massDelete = async () => {
        let productsIdsToDelete = [];
        let currentProducts = document.getElementsByClassName('delete-checkbox');
        for(let item of currentProducts){
            if(item.checked === true){
                productsIdsToDelete.push(item.getAttribute('productid'));
            }
        }

        if(productsIdsToDelete.length > 0){
            //hit endpoint to mass delete these ids, send them as payload
            console.log(JSON.stringify(productsIdsToDelete))
            const resp = await axios.post('http://127.0.0.1/scandiweb-backend/index.php/product/delete-products', JSON.stringify(productsIdsToDelete));
            console.log(resp)
            if(resp.status === 200){
                //update ProductList
                
            }
        }
        
    }


  return (
    <>
    <div style={topbarStyle}>
        <h3>Product List</h3>
        <div style={actionsDivStyle}>
            <Link to="/product-add"><button style={actionBtnsStyle}>Add</button></Link>
            <button style={actionBtnsStyle} onClick={massDelete}>Mass delete</button>
        </div>
    </div>
    <hr></hr>
    </>
  )
}

const topbarStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
    
}

const actionsDivStyle = {
    justifyContent: 'flex-end',
    padding: '5px'
}

const actionBtnsStyle = {
    padding: '5px',
    marginLeft: '10px'
}

export default Topbar