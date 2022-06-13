import React, { useState } from 'react'
import { addProduct } from '../services';
import {  useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [addpro, setAddpro] = useState({ pname:'', price:'',image:''});
    const navigate = useNavigate();

    const handler = (event) =>{
        const {name,value} = event.target;//object destructing
        setAddpro({...addpro, [name]:value});//use spred 

    }
    const addProductData = (event) =>{
        event.preventDefault();
        addProduct(addpro)
        .then(res=>{
            if(res.data){
                // console.log(res.data);
                alert("PRODUCT ADDED");
                navigate("/product");
            }
        })

    }
    
  return (
   <>
   <div className='container row'>
    <div className='col-md-8 my-3 mx-5 dflex text-align-center justify-content-center mx-auto '>
        <h3 className='mx-3 my-5'>ADD PRODUCT</h3>
        <form onSubmit={addProductData}>
    <div className="mb-3">
  <label  className="form-label">Enter Product Name</label>
  <input type="text" name="pname" className="form-control" id="" onChange={handler} placeholder="enter product name" />
</div>
<div className="mb-3">
  <label  className="form-label">Enter Price</label>
  <input type="text" name="price" className="form-control" id="" onChange={handler} placeholder="enter Price" />
</div>
<div className="mb-3">
  <label  className="form-label">Enter Image Url</label>
  <input type="text" name="image" className="form-control" id="" onChange={handler} placeholder="enter image url" />
</div>

<div className="mb-3">
  <button className='btn btn-primary' name="submit" >ADD PRODUCT</button>
</div>
</form>

    </div>
   </div>
   </>
  )
}

export default AddProduct