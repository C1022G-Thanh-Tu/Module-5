import React, { useEffect, useState } from "react";
import bookService from "../service/bookService";
import { Link, NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ModalDelete from "./ModalDelete";

function BookStore() {
  const [books, setBooks] = useState([]);
  const [deletedId, setDeleteId] = useState(0)
  const [deletedTitle, setDeleteTitle] = useState("")

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const bookData = await bookService.findAll({search:""});
    setBooks(bookData.data);
  };

  const transferInfo = (id, title) => {
    setDeleteId(id)
    setDeleteTitle(title)
  }
  
  return (
    <>
      <h1>Library</h1>
      <Formik
        initialValues={{
          search: ""
        }}

        onSubmit={(values) => {
          const getAllBooks = async () => {
            const bookData = await bookService.findAll(values);
            setBooks(bookData.data);
          }
          getAllBooks()
        }}

      >
        <Form className="mb-3">
          <Field name="search" id="search" />
          <button
            className="btn btn-dark"
            type="submit"
          >
            Search
          </button>
        </Form>
      </Formik>
      <NavLink to="/create" className="btn btn-success">
        Add a new book
      </NavLink>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <Link to={`/edit/${book.id}`} className="btn btn-primary me-2">
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModal"
                  onClick={() => transferInfo(book.id, book.title)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete 
        id = {deletedId}
        title = {deletedTitle}
        getList = {() => {
          getAllBooks();
        }}
      />
    </>
  );
}

export default BookStore;
