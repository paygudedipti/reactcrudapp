import React from 'react';
import imgcrud from '../Images/crud.gif';

const Home = () => {
  return (
   <>
   <div className='container'>
    <div className='row'>
      <div className='col-md-3'></div>
      <div className='col-md-6 my-5 mx-5 text-center' style={{color:"#000080"}}>
        <h3> 👉 WLCOME TO CRUD OPERATIONS 👈</h3>
        <img src={imgcrud} alt='imagenotshow' width={600} className='img-rounded ' />
      </div>
      <div className='col-md-3'></div>
    </div>
   </div>
   </>
  )
}

export default Home