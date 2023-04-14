import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom"
import Book from './components/Book';
import BookCreate from './components/BookCreate';
import { ToastContainer } from "react-toastify"
import BookEdit from "./components/BookEdit"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Book />}></Route>
        <Route path='/create' element={<BookCreate />}></Route>
        <Route path='/edit/:id' element={<BookEdit />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
