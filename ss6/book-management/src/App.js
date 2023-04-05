import './App.css';
import List from './component/list';
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import Create from './component/create';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Edit from './component/edit';
import * as bookManagementService from "./service/bookManagementService";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<List />} />
        <Route path='/create' element = {<Create />} />
        <Route path='/edit/:id' 
          element={<Edit />} 
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
