import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from  'react-loader-spinner'

function ContactForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().required("Required").email('Wrong format'),
          phone: Yup.string().required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            toast("Submitting successful");
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="testbox" style={{ marginTop: "70px" }}>
              <div className="">
                <h1>Contact Form</h1>
                <div className="item mb-3">
                  <label htmlFor="name" style={{ width: "80px" }}>
                    Name:{" "}
                  </label>
                  <Field type="text" name="name" placeholder="" id="name" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="email" style={{ width: "80px" }}>
                    {" "}
                    Email:{" "}
                  </label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="phone" style={{ width: "80px" }}>
                    {" "}
                    Phone:{" "}
                  </label>
                  <Field type="text" name="phone" id="phone" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="message" style={{ width: "80px" }}>
                    Message:{" "}
                  </label>
                  <input type="text" name="message" id="message" />
                </div>
                <div className="btn-block">
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
                    <button
                      type="submit"
                      style={{ backgroundColor: "#198754" }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}

export default ContactForm;
