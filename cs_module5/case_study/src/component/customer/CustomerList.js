import Footer from "../Footer";
import Header from "../Header";
import { customerList } from "./Customer";

function CustomerList() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 2000, marginTop: 70 }}>
        <div className="heading-img">
          <h3>KHÁCH HÀNG</h3>
        </div>

        <div className="room container">
          <div
            classname="text-center"
            style={{
              fontSize: 30,
              color: "#cbbe73",
              textAlign: "left",
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Danh sách khách hàng
          </div>
          <div className="element-button mb-5">
            <a
              className="btn btn-add btn-sm bg-success text-white"
              href="add-form-customer.html"
            >
              <i className="fas fa-plus"></i>
              Tạo mới khách hàng
            </a>
          </div>
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Họ Tên</th>
                  <th scope="col">Ngày sinh</th>
                  <th scope="col">Giới tính</th>
                  <th scope="col">Số CMND</th>
                  <th scope="col">Số Điện Thoại</th>
                  <th scope="col">Email</th>
                  <th scope="col">Loại khách</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {customerList.map((customer) => (
                  <tr key={customer.id}>
                    <th scope="row">{customer.id}</th>
                    <td>{customer.name}</td>
                    <td>{customer.dateOfBirth}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.identityNumb}</td>
                    <td>{customer.phoneNumb}</td>
                    <td>{customer.email}</td>
                    <td>{customer.type}</td>
                    <td>{customer.address}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger me-2"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <a
                        className="btn btn-primary btn-sm edit"
                        href="edit-form-customer.html"
                      >
                        <i className="fas fa-edit"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="ti-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="ti-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CustomerList;