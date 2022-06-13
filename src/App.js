
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import Product from './component/Product';
import ProductDetails from './component/ProductDetails';
import ProductEdit from './component/ProductEdit';

function App() {
  return (
    <>

<div className=''>
  <Router>
  <main>
  <Nav />
  </main>
  <section>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/product' element={<Product />} />
      <Route path='/productdetails/:id' element={<ProductDetails />} />
      <Route path='/productedit/:id' element={<ProductEdit />} />
    </Routes>

  </section>
  </Router>
</div>

   
    </>
  );
}

export default App;
