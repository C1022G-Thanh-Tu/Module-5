import React from "react";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import bookService from "../service/bookService";
import { Link, useNavigate } from "react-router-dom";

function CreateBook() {
  let navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          quantity: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          try {
            bookService.save(values);
            toast("Added successful");
            navigate("/");
          } catch (error) {
            toast("Added failed");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Add a new Book</h1>
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
                  Add
                </button>
                <Link to='/' className="btn btn-primary">Cancel</Link> 
              </>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CreateBook;
