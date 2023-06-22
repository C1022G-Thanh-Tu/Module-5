import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Book, DeletedBook, BookFilter } from "../type/bookType";
import bookService from "../service/bookService";
import { Link } from "react-router-dom";
import ModalDelete from "../util/ModalDelete";
import ReactPaginate from "react-paginate";

function BookComponent() {
  const [books, setBooks] = useState<Book[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [bookFilter, setBookFilter] = useState<BookFilter>({
    page: 0,
    name: "",
    id: "",
  });
  const [deletedBook, setDeletedBook] = useState<DeletedBook>({
    deletedId: "",
    deletedName: "",
  });

  const handlePageClick = (event: { selected: number | string }) => {
    setBookFilter((prev) => ({ ...prev, page: +event.selected }));
  };

  const handleTransferInfo = (id: number, name: string) => {
    setDeletedBook((prev) => ({ ...prev, deletedId: id, deletedName: name }));
  };

  const handleCreateNewBookFilter = () => {
    const newBookFilter = { ...bookFilter };
    setBookFilter(newBookFilter);
  }

  const handleDelete = async () => {
    try {
      await bookService.remove(deletedBook.deletedId);
      handleCreateNewBookFilter()
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await bookService.findAll(bookFilter);
        setBooks(res.data.content);
        setPageCount(res.data.totalPages);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [bookFilter]);

  return (
    <>
      <Link to="/create" className="btn btn-success mb-3">
        Thêm mới sách
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Mã sách</th>
            <th scope="col">Tên sách</th>
            <th scope="col">Thể loại</th>
            <th scope="col">Ngày nhập sách</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <th>{++index}</th>
              <td>{book.code}</td>
              <td>{book.name}</td>
              <td>{book.bookTypeDTO.name}</td>
              <td>{format(new Date(book.importedDate), "dd/MM/yyyy")}</td>
              <td>{book.quantity}</td>
              <td>
                <Link
                  to={`/update/${book.id}`}
                  className="btn btn-primary me-3"
                >
                  Sửa
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleTransferInfo(book.id, book.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalDelete
        deletedName={deletedBook?.deletedName}
        onCompletedDelete={handleDelete}
      />

      <div className="d-grid">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel="< "
          containerClassName="pagination"
          pageLinkClassName="page-num"
          nextLinkClassName="page-next"
          previousLinkClassName="page-previous"
          activeClassName="active"
          disabledClassName="d-none"
        />
      </div>
    </>
  );
}

export default BookComponent;
