import { Formik, Field, ErrorMessage, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import bookService from "../service/bookService";
import bookTypeService from "../service/bookTypeService";
import { BookType, Book } from "../type/bookType";

function UpdateBook() {
  const param: { id?: number | string } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState<Book>();
  const [bookTypes, setBookTypes] = useState<BookType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await bookService.findById(param.id);
        setBook(res.data);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [param.id]);

  useEffect(() => {
    (async () => {
      try {
        const res = await bookTypeService.findAll();
        setBookTypes(res.data);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  return (
    <>
      <h1 className="mb-3 text-center">Tạo mới sách</h1>
      <Formik
        enableReinitialize={true}
        initialValues={{
          id: book?.id,
          code: book?.code,
          name: book?.name,
          bookTypeDTO: book?.bookTypeDTO.id,
          importedDate: book?.importedDate,
          quantity: book?.quantity,
        }}
        validationSchema={Yup.object({
          code: Yup.string()
            .required("Trường này yêu cầu nhập")
            .matches(/^BO-[0-9]{4}$/, "Mã sách có định dạng BO-XXXX (X là số)"),
          name: Yup.string()
            .required("Trường này yêu cầu nhập")
            .max(100, "Tên sách không dài quá 100 ký tự"),
          quantity: Yup.string()
            .required("Trường này yêu cầu nhập")
            .matches(/^[1-9][\\d]*$/, "Số lượng sách phải là số nguyên dương"),
        })}
        onSubmit={async (values) => {
          let newValues = {
            ...values,
            bookTypeDTO: {
              id: values.bookTypeDTO ? +values.bookTypeDTO : undefined,
            },
          };
          try {
            await bookService.update(newValues);
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form className="col-3" style={{ margin: "auto" }}>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Nhập mã sách
            </label>
            <Field type="text" className="form-control" id="code" name="code" />
          </div>
          <ErrorMessage component="div" className="text-danger" name="code" />
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nhập tên sách
            </label>
            <Field type="text" className="form-control" id="name" name="name" />
            <ErrorMessage component="div" className="text-danger" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="importedDate" className="form-label">
              Chọn ngày nhập sách
            </label>
            <Field
              type="date"
              className="form-control"
              id="importedDate"
              name="importedDate"
            />
            <ErrorMessage
              component="div"
              className="text-danger"
              name="importedDate"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Số lượng sách
            </label>
            <Field
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
            />
            <ErrorMessage
              component="div"
              className="text-danger"
              name="quantity"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookTypeDTO" className="form-label">
              Thể loại sách
            </label>
            <Field
              as="select"
              className="form-control"
              id="bookTypeDTO"
              name="bookTypeDTO"
            >
              <option value={0}>--- Hãy chọn thể loại sách ---</option>
              {bookTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              component="div"
              className="text-danger"
              name="importedDate"
            />
          </div>
          <button type="submit" className="btn btn-success me-3">
            Chỉnh sửa
          </button>
          <Link to="/" className="btn btn-primary">
            Thoát
          </Link>
        </Form>
      </Formik>
    </>
  );
}

export default UpdateBook;
