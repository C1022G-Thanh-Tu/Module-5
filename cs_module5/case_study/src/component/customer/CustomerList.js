
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import customerService from "../../service/customer/customerService";
import customerTypeService from "../../service/customer/customerTypeService";
import ModalDelete from '../modal/modalDelete';
function CustomerList() {
  const [customerList, setCustomerList] = useState([])
  const [customerType, setCustomerType] = useState([])
  const [deletedId, setDeleteId] = useState(0)
  const [deletedName, setDeleteName] = useState("")

  useEffect(() => {
    getCustomerList()
    getCustomerTypeList()
  }, [])

  const getCustomerList = async () => {
    const customerData = await customerService.findAll()
    setCustomerList(customerData.data)
  }

  const getCustomerTypeList = async () => {
    const customerTypeData = await customerTypeService.findAll()
    setCustomerType(customerTypeData.data)
  }

  const transferInfo = (id, name) => {
    setDeleteId(id)
    setDeleteName(name)
  }

  return (
    <>
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
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontStyle: "normal",
              marginBottom: "20px"
            }}
          >
            Danh sách khách hàng
          </div>
          <div className="element-button mb-5">
            <Link
              className="btn btn-add btn-sm bg-success text-white"
              to='/customer-add'
            >
              <i className="fas fa-plus"></i>
              Tạo mới khách hàng
            </Link>
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
                  <tr key={customer.id}>
                    <th scope="row">{++index}</th>
                    <td>{customer.name}</td>
                    <td>{customer.dateOfBirth}</td>
                    <td>
                      {customer.gender === 0 ? 'nam' : 'nữ'}
                      </td>
                    <td>{customer.identityNumb}</td>
                    <td>{customer.phoneNumb}</td>
                    <td>{customer.email}</td>
                    <td>
                      {
                        customerType.filter(
                          (type) => type.id === customer.typeId
                        )[0].name
                      }
                    </td>
                    <td>{customer.address}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger me-2"
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal"
                        onClick={() => transferInfo(customer.id, customer.name)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <Link
                        className="btn btn-primary btn-sm edit"
                        to={`/customer-edit/${customer.id}`}
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ModalDelete
              id = {deletedId}
              name = {deletedName}
              getList = {() => {
                getCustomerList()
              }}
            />
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

export default CustomerList;
