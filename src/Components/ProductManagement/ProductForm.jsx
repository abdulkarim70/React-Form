import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, seterror]=useState('')
    const productHandleSubmit=e=>{
        e.preventDefault()
        // console.log(e.target)
        const name=e.target.name.value
        const price=e.target.price.value
        const quantity=e.target.quantity.value
        // console.log(name, price,quantity);

if(name.length===0){
    seterror('Please provide product name')
    return
}
else if (price.length===0){
    seterror('Please provide product price')
    return
}
else if (quantity.length===0){
    seterror('Please provide product quantity')
    return
}
else if(price<0){
    seterror('Price can not be negative')
    return
}
else{
    seterror('')
}
        const newProduct={
            name,
            price,
            quantity
        
        }
        // console.log(newProduct);
        if(!error){
            handleAddProduct(newProduct)
        }
    }
    return (
        <div>
            <h3>Add a product</h3>
           <form onSubmit={productHandleSubmit} >
            <input type="text" name='name' placeholder='Product Name'/>
            <br />
            <input type="text" name='price' placeholder='Product Price'/>
        <br />
            <input type="text" name='quantity' placeholder='Quantity'/>
            <br />
            <input type="submit" value="Submit" />
            </form> 
          <p style={{color:'red'}}><small>{error}</small></p>  
        </div>
    );
};

export default ProductForm;