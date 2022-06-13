import React, { useEffect, useState } from 'react'
import { editProduct, getProductById } from '../services';
import {  useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
    const [updatePro, setUpdatePro] = useState({ });
    const {id} = useParams();

//Access data from id
useEffect(()=>{
  getProductById(id)
  .then(res=>
    setUpdatePro(res.data))
    .catch(err=>console.log(err))
},[id]);

    const navigate = useNavigate();//for navigation

    //handle dom value
    const handler = (event) =>{
        const {name,value} = event.target;//object destructing
        setUpdatePro({...updatePro, [name]:value});//use spred 

    }
    //update product
    const postData = (event) =>{
        event.preventDefault();
        editProduct(id,updatePro)
        .then(res=>{
            if(res.data){
                // console.log(res.data);
                alert("PRODUCT Updated");
                navigate("/product");
            }
        })

    }
    
  return (
   <>
   <div className='container row'>
    <div className='col-md-8 my-3 mx-5 dflex text-align-center justify-content-center mx-auto '>
        <h3 className='mx-3 my-5'>UPDATE PRODUCT</h3>
        <form onSubmit={postData}>
    <div className="mb-3">
  <label  className="form-label">Enter Product Name</label>
  <input type="text" name="pname" className="form-control" value={updatePro.pname} onChange={handler} placeholder="enter product name" />
</div>
<div className="mb-3">
  <label  className="form-label">Enter Price</label>
  <input type="text" name="price" className="form-control" value={updatePro.price} onChange={handler} placeholder="enter Price" />
</div>
<div className="mb-3">
  <label  className="form-label">Enter Image Url</label>
  <input type="text" name="image" className="form-control" value={updatePro.image} onChange={handler} placeholder="enter image url" />
</div>

<div className="mb-3">
  <button className='btn btn-primary' name="submit" >UPDATE</button>
</div>
</form>

    </div>
   </div>
   </>
  )
}

export default ProductEdit