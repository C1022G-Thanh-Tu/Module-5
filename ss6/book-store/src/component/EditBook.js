import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import bookService from "../service/bookService";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditBook() {
  let navigate = useNavigate();
  const param = useParams();
  const [book, setBook] = useState();
  useEffect(() => {
    const getBookDetail = async () => {
      const bookDetail = await bookService.findById(param.id);
      setBook(bookDetail.data);
    };
    getBookDetail();
  }, [param.id]);

  if (!book) {
    return (
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  }

  return (
    <>
      <Formik
        initialValues={{
          id: book?.id,
          title: book?.title,
          quantity: book?.quantity,
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          try {
            bookService.edit(values);
            toast("Edited successful");
            navigate("/");
          } catch (error) {
            toast("Edited failed");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Edit Book</h1>
            <Field type="hidden" name="id" />
            <div className="mb-3">
              <label htmlFor="title" style={{ width: "80px" }}>
                Title
              </label>
              <Field name="title" id="title" type="text" />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" style={{ width: "80px" }}>
                Quantity
              </label>
              <Field name="quantity" id="quantity" type="number" />
            </div>
            {isSubmitting ? (
              <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              <>
                <button type="submit" className="btn btn-success me-2">
                  Edit
                </button>
                <Link to="/" className="btn btn-primary">
                  Cancel
                </Link>
              </>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditBook;
