import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookStore from "./component/BookStore";
import CreateBook from "./component/CreateBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditBook from "./component/EditBook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookStore />}></Route>
        <Route path="/create" element={<CreateBook />}></Route>
        <Route path="/edit/:id" element={<EditBook />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
