import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import bookService from "../service_API/bookService";
import bookTypeService from "../service_API/bookTypeService";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Form, Formik, Field } from "formik";

function Book() {
  const [books, setBooks] = useState([]);
  const [bookTypes, setBookTypes] = useState([]);  
  const [pageCount, setPageCount] = useState(0);
  const [numberPage, setNumberPage] = useState(0);

  useEffect(() => {
    getBooks();
    getBookTypes();
  }, [numberPage]);
  const getBooks = async () => {
    const booksData = await bookService.findAllWithPageOrName(numberPage, "");
    setBooks(booksData.data.content);
    setPageCount(booksData.data.totalPages)
  };
  const getBookTypes = async () => {
    const bookTypesData = await bookTypeService.findAll();
    setBookTypes(bookTypesData.data);
  };
  const handlePageClick = (event) => {
    setNumberPage(event.selected);
  }
  return (
    <>
      <Link to="/create" className="btn btn-success mb-3">
        Thêm mới sách
      </Link>

      <Formik
        initialValues={{
          name: ""
        }}
        onSubmit={async (values) => {
          try {
            const searchResult = await bookService.findAllWithPageOrName(
              numberPage,
              values.name
            );
            console.log(searchResult.data.content);
            setBooks(searchResult.data.content);
            let error = document.getElementById("error")
            if (searchResult.data.length === 0) {
                error.style.display = 'block'
            } else {
                error.style.display = 'none'
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form>
          <Field name="name" style={{ height: "34px" }} />
          <button type="submit" className="btn btn-secondary me-3">
            Tìm kiếm
          </button>
          <div id="error" className="text-danger" style={{display: 'none'}}>Không tìm thấy sách</div>
        </Form>
      </Formik>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Mã sách</th>
            <th scope="col">Tên sách</th>
            <th scope="col">Thể loại</th>
            <th scope="col">Ngày nhập sách</th>
            <th scope="col">Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{book.code}</td>
              <td>{book.name}</td>
              <td>
                {
                  bookTypes.filter((type) => type.id === book.bookTypeDTO.id)[0]
                    ?.name
                }
              </td>
              <td>{book.importedDate}</td>
              <td>{book.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-grid">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          // pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< "
          // renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          nextLinkClassName="page-previous"
          previousLinkClassName="page-next"
          activeClassName="active"
        />
      </div>
    </>
  );
}

export default Book;
