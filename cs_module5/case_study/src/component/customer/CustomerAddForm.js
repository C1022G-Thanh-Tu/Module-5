import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

function CustomerAddForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          dateOfBirth: "",
          gender: "",
          identityNumb: "",
          phoneNumb: "",
          email: "",
          typeId: "",
          address: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().required("Required").email("Wrong format"),
          phone: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="testbox" style={{ marginTop: "70px" }}>
              <div className="">
                <h1>Thêm mới Khách hàng</h1>
                <div className="item">
                  <label htmlFor="name">Họ tên</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item">
                  <label htmlFor="date-of-birth">Ngày sinh</label>
                  <Field
                    type="date"
                    name="date-of-birth"
                    id="date-of-birth"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="gender">Giới tính</label>
                  <div className="col-md-12">
                    <Field
                      required
                      type="radio"
                      className="gender"
                      id="men"
                      name="gender"
                      value="true"
                    />
                    <label htmlFor="men">Nam</label>
                    <Field
                      required
                      type="radio"
                      className="gender"
                      id="women"
                      name="gender"
                      value="false"
                    />
                    <label htmlFor="women">Nữ</label>
                  </div>
                </div>
                <div className="item">
                  <label htmlFor="identity-number">Số CMND</label>
                  <Field
                    type="text"
                    name="identity-number"
                    id="identity-number"
                  />
                </div>
                <div className="item">
                  <label htmlFor="phone-number">Số Điện Thoại</label>
                  <Field type="text" name="phone-number" id="phone-number" />
                </div>
                <div className="item">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" id="email" />
                </div>
                <div className="item">
                  <label htmlFor="customer-type">Loại khách</label>
                  <select>
                    <option value="">Bạc</option>
                    <option value="1">Vàng</option>
                    <option value="2">Kim Cương</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="address">Địa chỉ</label>
                  <Field type="text" name="address" id="address" />
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
                    <>
                      <button
                        type="submit"
                        style={{ backgroundColor: "#198754" }}
                      >
                        Thêm
                      </button>
                      <button
                        type="button"
                        style={{ backgroundColor: "#0d6efd" }}
                      >
                        Thoát
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CustomerAddForm;
