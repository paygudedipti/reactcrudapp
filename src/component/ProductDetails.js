import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { getProductById } from '../services';



const ProductDetails = () => {
   
    const [proData,setProdata] = useState({});
    const {id } = useParams();

    useEffect(()=>{
        getProductById(id)
        .then(res=>
            setProdata(res.data))
            .catch(err=>console.log(err))
        

    },[id]);


 
  return (
   <>
   <div className='container row '>
    <div className='col-md-8 dflex justify-content-center text-align-center mx-auto'>
        <h2>PRODUCT INFO</h2>
  
        <div className="card mx-5 my-5" style={{width: "18rem"}}>
        <img src={proData.image} className="card-img-top" height={200} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{proData.pname}</h5>
          <p className="card-text">Price : {proData.price}</p>
          <button className="btn btn-primary">ADD CART</button>
        </div>
      </div>
        
    </div>
   </div>
   
   </>
  )
}

export default ProductDetails