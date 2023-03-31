import { Component } from "react";

const customerList = [
  {
    name: "abc",
    dateOfBirth: "2020/12/12",
    gender: "nam",
    identityNumb: "00956",
    phoneNumb: "090123",
    email: "123@gmail.com",
    type: "Diamond",
    address: "abc",
  },
  {
    name: "abc",
    dateOfBirth: "2020/12/12",
    gender: "nam",
    identityNumb: "00956",
    phoneNumb: "090123",
    email: "123@gmail.com",
    type: "Diamond",
    address: "abc",
  },
];

let stt = 1;

class CustomerList extends Component {
  render() {
    return (
      <>
        <div style="max-width:2000px;margin-top:70px">
          <div className="heading-img">
            <h3>KHÁCH HÀNG</h3>
          </div>

          <div className="room container">
            <div
              className="text-center"
              style="font-size: 30px;color: #cbbe73;line-height: 36px;text-align: left;font-family:Playfair Display;font-weight:700;font-style:normal"
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
                  {customerList.map((customer, index) => (
                    <tr key={index}>
                      <th scope="row">{stt++}</th>
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
                          className="btn btn-danger"
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
      </>
    );
  }
}

export default CustomerList;