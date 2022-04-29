import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../layout/Alert'
import axios from 'axios'

const ProductAdd = () => {

  const productTypes = ['BOOK', 'DVD', 'FURNITURE'];
  const navigate = useNavigate();
  const [alert, setAlert] = useState({})
  
  const typeSelectorChange = (element) => {
    resetTypesSelector();

    (element !== '-' ? document.getElementById(element + '_more_info').style = 'display: block' : '')
  }

  const resetTypesSelector = () => {
    productTypes.map((type) => {
      document.getElementById(type + '_more_info').style = 'display: none'
    })
  }

  const insertNewProduct = async () => {

    // Validate all the mandatory fields
    let formIsValid = validateFields();

    if(formIsValid === true){

      // Validate the SKU is unique
      let skuExists = await doesSkuExists(document.getElementById('sku').value);

      if(skuExists === false){
        
        const payload = {
          sku: document.getElementById('sku').value,
          name: document.getElementById('name').value,
          price: document.getElementById('price').value,
          type: document.getElementById('productType').value,
          size: document.getElementById('size').value,
          height: document.getElementById('height').value,
          width: document.getElementById('width').value,
          length: document.getElementById('length').value,
          weight: document.getElementById('weight').value
        }
        
        try{
          
          const resp = await axios.post('http://127.0.0.1/scandiweb-backend/index.php/products/add-product', JSON.stringify(payload));

          if(resp.status === 200){
            // Everything OK. Redirect to product list.
            navigate("/")
          }
        }catch(error){
          // Backend server error
          setAlert({'show': true, 'alertMsg': 'There was a problem with the backend. So sorry.'})
        }

      }else{  
        // SKU needs to be unique, warm the user.
        setAlert({'show': true, 'alertMsg': 'SKU not unique. Please use another.'});
      }


    }else{
      setAlert({'show' : true, 'alertMsg': 'All the fields are required. Please fill them.'})
    }
  }

  // Ask the backend about the new sku to be created
  const doesSkuExists = async (sku) => {

    const resp = await axios.post('http://127.0.0.1/scandiweb-backend/index.php/products/check-sku', JSON.stringify({sku: sku}));

    return (resp.data.exists == true ? true : false)
  }

  const validateFields = () => {

    if(document.getElementById('sku').value === '' || 
        document.getElementById('name').value === '' ||
        document.getElementById('price').value === '' ||
        document.getElementById('productType').value === '-'){

          return false;
    }
    
    // Check attributes by type
    if(document.getElementById('productType').value === 'DVD'){
      if(document.getElementById('size').value === ''){
        return false;
      }
    }

    if(document.getElementById('productType').value === 'FURNITURE'){
      if(document.getElementById('height').value === '' ||
          document.getElementById('width').value === '' || 
          document.getElementById('length').value === ''){
        return false;
      }
    }

    if(document.getElementById('productType').value === 'BOOK'){
      if(document.getElementById('weight').value === ''){
        return false;
      }
    }

    return true;
  }

  return (
    <>
        <div className='topbar'>
            <h3>Product Add</h3>
            <div>
              <button onClick={() => insertNewProduct()}>Save</button>
              <Link to="/"><button>Cancel</button></Link>
            </div>
        </div>
        <hr></hr>
        <Alert alert={alert}/>
          
          <form id="product_form">
            <div className='form-row'>
              <span>SKU:</span>
              <input name="sku" id="sku"></input>
            </div>
            <div className='form-row'>
              <span>Name:</span>
              <input name="name" id="name"></input>
            </div>
            <div className='form-row'>
              <span>Price ($):</span>
              <input type="number" name="price" id="price"></input>
            </div>
            <div className='form-row'>
              <span>Type Switcher:</span>
              <select name="productType" id="productType" onChange={(e) => typeSelectorChange(e.target.value)}>
                        <option value="-">Type Switcher</option>
                        <option value="DVD" id="DVD">DVD</option>
                        <option value="FURNITURE" id="Furniture">Furniture</option>
                        <option value="BOOK" id="Book">Book</option>
               </select>
            </div>
            <div id='DVD_more_info' style={{display:'none'}}>
                <div className='form-row'  >
                    <span>Size (MB):</span>
                    <input type="number" name="size" id="size"></input>
                </div>
                <div className='form-row'>
                    <span></span>
                    <label>Please provide disk size in MB format</label>
                </div>
            </div>
            <div id='FURNITURE_more_info' style={{display:'none'}}>
                <div className='form-row'  >
                    <span>Height (CM):</span>
                    <input type="number" step="0.1" name="height" id="height"></input>
                </div>
                <div className='form-row'  >
                    <span>Width (CM):</span>
                    <input type="number" step="0.1" name="width" id="width"></input>
                </div>
                <div className='form-row'  >
                    <span>Length (CM):</span>
                    <input type="number" step="0.1" name="length" id="length"></input> 
                </div>
                <div className='form-row'>
                    <span></span>
                    <label>Please provide dimensions in HxWxL format</label>
                </div>
            </div>

            <div id='BOOK_more_info' style={{display:'none'}}>
                <div className='form-row'  >
                    <span>Weight (KG):</span>
                    <input name="weight" type="number" step="0.1" id="weight"></input>
                </div>
                <div className='form-row'>
                    <span></span>
                    <label>Please provide book weight in KG format</label>
                  
                </div>
            </div>                        
          </form>
    </>
  )
}

export default ProductAdd