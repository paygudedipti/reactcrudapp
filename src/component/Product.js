import React, { useEffect, useState } from 'react'
import { deleteProduct, getAllProduct } from '../services';
import { Link } from 'react-router-dom';

const Product = () => {
    const [getProduct, setGetProduct] = useState([]);

    useEffect(()=>{
        getAllProduct()
        .then(res=>
            // console.log(res.data))
            setGetProduct(res.data))
            .catch(err=>console.log(err))

    },[]);

    const delpro = (id)=>{
        if(window.confirm("DO U WANT TO DELTE PRODUC?")){
            deleteProduct(id)
            .then(res=>{
                if(res.data){
                    alert("product delete")
                    let data = getProduct.filter(val=> val.id!==id)
                    setGetProduct(data);
                }
            })
        }
    }
  return (
  <>
  <div className='container-fuild row'>
    <h2 className='text-center'>PRODUCTS</h2>
    
    
        {
    
            
            getProduct.map(pro=>
                <div className='col-md-3' key={pro.id} >
                <div className="card my-3" style={{width:"18rem"}}>
                <img src={pro.image} height={300} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{pro.pname}</h5>
                  <p className="card-text">Price: {pro.price}</p>
                  <Link to={`/productdetails/${pro.id}`} className="btn btn-primary mx-2">Info</Link>
                  <Link to={`/productedit/${pro.id}`} className="btn btn-info mx-2">EDIT</Link>
                  <button className="btn btn-danger mx-2"  onClick={()=>delpro(pro.id)}>DELETE</button>
                
                </div>
                </div>
              </div>
       
           
                )
        }
   

    </div>
  
  </>
  )
}

export default Product