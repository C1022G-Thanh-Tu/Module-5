import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

function MedicalForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          identityNumb: "",
          yearOfBirth: "",
          gender: "",
          nationality: "",
          company: "",
          isHaveHealthInsuranceCard: false,
          province: "",
          district: "",
          wards: "",
          address: "",
          email: "",
          phone: "",
          signOfIllness: [],
          contactWith: [],
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          identityNumb: Yup.string().required("Required"),
          yearOfBirth: Yup.date()
            .required("Required")
            .min(1900, "Year of birth must be greater than or equal to 1900"),
          nationality: Yup.string().required("Required"),
          province: Yup.string().required("Required"),
          district: Yup.string().required("Required"),
          wards: Yup.string().required("Required"),
          address: Yup.string().required("Required"),
          email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
          phone: Yup.string().required("Required"),
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
            <div className="test-center" style={{ marginLeft: "70px" }}>
              <div className="">
                <h1>Tờ Khai Y tế</h1>
                <div className="item mb-3">
                  <label htmlFor="name" style={{ width: "200px" }}>
                    Họ Tên:
                  </label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="identityNumb" style={{ width: "200px" }}>
                    Số hộ chiếu/CMND:
                  </label>
                  <Field type="text" name="identityNumb" id="identityNumb" />
                  <ErrorMessage
                    name="identityNumb"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="yearOfBirth" style={{ width: "200px" }}>
                    Năm sinh:
                  </label>
                  <Field type="text" name="yearOfBirth" id="yearOfBirth" />
                  <ErrorMessage
                    name="yearOfBirth"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <span style={{ width: "200px", display: "inline-block" }}>
                    Giới tính:
                  </span>
                  <Field type="radio" name="gender" id="male" value = '1'/>
                  <label htmlFor="male" style={{ width: "50px" }}>
                    Nam
                  </label>
                  <Field type="radio" name="gender" id="female" value = '0'/>
                  <label htmlFor="female" style={{}}>
                    Nữ
                  </label>
                </div>
                <div className="item mb-3">
                  <label htmlFor="nationality" style={{ width: "200px" }}>
                    Quốc tịch:
                  </label>
                  <Field type="text" name="nationality" id="nationality" />
                  <ErrorMessage
                    name="nationality"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="company" style={{ width: "200px" }}>
                    Công ty làm việc:
                  </label>
                  <Field type="text" name="company" id="company" />
                  <ErrorMessage
                    name="company"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label
                    htmlFor="isHaveHealthInsuranceCard"
                    style={{ width: "200px" }}
                  >
                    Có thể bảo hiểm y tế:
                  </label>
                  <Field
                    type="checkbox"
                    name="isHaveHealthInsuranceCard"
                    id="isHaveHealthInsuranceCard"
                  />
                </div>
                <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                <div className="item mb-3">
                  <label htmlFor="province" style={{ width: "200px" }}>
                    Tỉnh thành:
                  </label>
                  <Field type="text" name="province" id="province" />
                  <ErrorMessage
                    name="province"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="district" style={{ width: "200px" }}>
                    Quận/huyện:
                  </label>
                  <Field type="text" name="district" id="district" />
                  <ErrorMessage
                    name="district"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="wards" style={{ width: "200px" }}>
                    Phường/xã:
                  </label>
                  <Field type="text" name="wards" id="wards" />
                  <ErrorMessage
                    name="wards"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="address" style={{ width: "200px" }}>
                    Số nhà, phố, tổ dân phố/thôn/đội:
                  </label>
                  <Field type="text" name="address" id="address" />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="email" style={{ width: "200px" }}>
                    Email:
                  </label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <label htmlFor="phone" style={{ width: "200px" }}>
                    Phone:
                  </label>
                  <Field type="text" name="phone" id="phone" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="item mb-3">
                  <h3>
                    Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh
                    thổ nào (Có thể đi qua nhiều quốc gia)
                  </h3>
                  <Field type="text" name="message" id="message" />
                </div>
                <div className="item mb-3">
                  <h3>
                    Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu
                    nào sau đây không?
                  </h3>
                  <div>
                    <Field
                      type="checkbox"
                      name="signOfIllness"
                      id="fever"
                      value="Sốt"
                    />
                    <label htmlFor="fever">Sốt</label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      name="signOfIllness"
                      id="cough"
                      value="Ho"
                    />
                    <label htmlFor="cough">Ho</label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      name="signOfIllness"
                      id="shortnessOfBreath"
                      value="Khó thở"
                    />
                    <label htmlFor="shortnessOfBreath">Khó thở</label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      name="signOfIllness"
                      id="pneumonia"
                      value="Viêm phổi"
                    />
                    <label htmlFor="pneumonia">Viêm phổi</label>
                  </div>
                </div>
                <div className="item mb-3">
                  <h3>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</h3>
                  <div>
                    <Field
                      type="checkbox"
                      name="contactWith"
                      id="signOfCovid19"
                      value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"
                    />
                    <label htmlFor="signOfCovid19">
                      Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                    </label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      name="contactWith"
                      id="getCovid19"
                      value="Người từ nước có bệnh COVID-19"
                    />
                    <label htmlFor="getCovid19">
                      Người từ nước có bệnh COVID-19
                    </label>
                  </div>
                  <div>
                    <Field
                      type="checkbox"
                      name="contactWith"
                      id="signOfFever"
                      value="Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)"
                    />
                    <label htmlFor="signOfFever">
                      Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                    </label>
                  </div>
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

export default MedicalForm;
