import React, { useEffect, useState } from "react";
import * as bookManagementService from "../service/bookManagementService";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function List() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    const listAllBook = async () => {
      const result = await bookManagementService.findAll();
      setBookList(result);
    };
    listAllBook();
  }, []);

  const handleDelete = async (id) => {
    if (await bookManagementService.remove(id)) {
      toast.success("Deleted failed!");
    } else {
      toast.success("Deleted successfully!");
    }
  };

  return (
    <>
      <h1>Library</h1>
      <NavLink to="/create" className="btn btn-success">
        Add a new Book
      </NavLink>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Ttile</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
                <td>
                  <NavLink
                    to={`edit/${book.id}`}
                    className="btn btn-primary me-4"
                  >
                    Edit
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
