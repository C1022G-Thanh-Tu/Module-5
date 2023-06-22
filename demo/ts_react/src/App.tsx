import React from "react";
import "./App.css";
import BookComponent from "./component/Book";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom"
import CreateBook from "./component/CreateBook";
import UpdateBook from "./component/UpdateBook";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<BookComponent />}></Route>
          <Route path="/create" element={<CreateBook />}></Route>
          <Route path="/update/:id" element={<UpdateBook />}></Route>
        </Routes>
      </>
  );
}

export default App;
