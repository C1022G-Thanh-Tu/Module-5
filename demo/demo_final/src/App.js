import './App.css';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom'
import ProductCreate from './components/ProductCreate';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/create' element={<ProductCreate />} />
        <Route path='/edit/:id' element={<ProductEdit />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
