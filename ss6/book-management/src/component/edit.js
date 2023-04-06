import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as bookManagementService from "../service/bookManagementService";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function Edit() {
  let navigate = useNavigate();
  const param = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    async function getBookDetail() {
      const bookDetail = await bookManagementService.findById(param.id);
      setBook(bookDetail.data);
    }
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
      <Link to="/" className="btn btn-dark">
        List
      </Link>
      <Formik
        initialValues={{
          id: book?.id,
          title: book?.title,
          quantity: book?.quantity,
        }}
        onSubmit={(values, { setSubmitting }) => {
          const create = async () => {
            console.log(values);
            if (await bookManagementService.edit(values)) {
              toast("Edited failed");
            } else {
              toast("Edited successful");
            }

            setSubmitting(false);

            // navigate("/");
          };
          create();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Edit</h1>
            <Field id="id" type="hidden" name="id" />
            <div className="mb-3">
              <label htmlFor="title" style={{ width: "80px" }}>
                Title:
              </label>
              <Field id="title" name="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" style={{ width: "80px" }}>
                Quantity:
              </label>
              <Field type="number" id="quantity" name="quantity" />
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
              <button type="submit" className="btn btn-success">
                Edit
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Edit;
