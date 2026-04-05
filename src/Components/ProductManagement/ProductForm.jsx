import React from 'react';

const ProductForm = ({handleAddProduct}) => {
    const productHandleSubmit=e=>{
        e.preventDefault()
        // console.log(e.target)
        const name=e.target.name.value
        const price=e.target.price.value
        const quantity=e.target.quantity.value
        // console.log(name, price,quantity);
        const newProduct={
            name,
            price,
            quantity
        
        }
        // console.log(newProduct);
        handleAddProduct(newProduct)
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
        </div>
    );
};

export default ProductForm;