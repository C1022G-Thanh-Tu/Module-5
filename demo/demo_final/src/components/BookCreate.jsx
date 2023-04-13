import React from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import bookTypeService from "../service/bookTypeService";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import bookService from "../service/bookService";

function BookCreate() {
  let navigate = useNavigate();
  const [bookTypes, setBookTypes] = useState([]);
  useEffect(() => {
    getBookTypes();
  }, []);
  const getBookTypes = async () => {
    const bookTypesData = await bookTypeService.findAll();
    setBookTypes(bookTypesData.data);
  };
  return (
    <>
      <h1 className="mb-3">Tạo mới sách</h1>
      <Formik
        initialValues={{
          code: "",
          name: "",
          typeId: "",
          importedDate: "",
          quantity: "",
        }}
        validationSchema={Yup.object({
          code: Yup.string().matches(
            "^BO-[0-9]{4}$",
            "Mã sách có định dạng BO-XXXX (X là số)"
          ),
          name: Yup.string().max(100, "Tên sách không dài quá 100 ký tự"),
          // quantity:Yup.number().required().min(1,'<1')
          // importedDate: Yup.date().max()
        })}
        onSubmit={async (values) => {
          let newValues = {
            ...values,
            typeId: +values.typeId,
          };
          try {
            await bookService.save(newValues);
            toast("Thêm mới thành công");
            navigate("/");
          } catch (error) {
            toast("Thêm mới thất bại");
          }
        }}
      >
        <Form className="col-3 ">
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
            <label htmlFor="typeId" className="form-label">
              Thể loại sách
            </label>
            <Field
              as="select"
              className="form-control"
              id="typeId"
              name="typeId"
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
            Tạo mới
          </button>
          <Link to="/" className="btn btn-primary">
            Thoát
          </Link>
        </Form>
      </Formik>
    </>
  );
}

export default BookCreate;
