import { contractList } from "./Contract";
import { customerList } from "../customer/Customer";
import { facilitiesList } from "../facility/Facilities";

function ContractList() {
  return (
    <>
      <div style={{ maxWidth: 2000, marginTop: 70 }}>
        <div className="heading-img">
          <h3>HỢP ĐỒNG</h3>
        </div>
        <div className="room container">
          <div
            className="text-center"
            style={{
              fontSize: 30,
              color: "#cbbe73",
              textAlign: "left",
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontStyle: "normal",
              marginBottom: "20px"
            }}
          >
            Danh sách hợp đồng
          </div>
          <div className="element-button mb-5">
            <a
              className="btn btn-add btn-sm bg-success text-white"
              href="add-form-contract.html"
            >
              <i className="fas fa-plus" />
              Tạo mới hợp đồng
            </a>
          </div>
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Khách hàng</th>
                  <th scope="col">Dịch vụ</th>
                  <th scope="col">Số hợp đồng</th>
                  <th scope="col">Ngày bắt đầu</th>
                  <th scope="col">Ngày kết thúc</th>
                  <th scope="col">Số tiền cọc trước</th>
                  <th scope="col">Tổng số tiền thanh toán</th>
                </tr>
              </thead>
              <tbody>
                {contractList.map((contract) => (
                  <tr key={contract.id}>
                    <th scope="row">{contract.id}</th>
                    <td>{contract.contractCode}</td>
                    <td>
                      {
                        customerList.filter(
                          (customer) => customer.id === contract.customerId
                        )[0].name
                      }
                    </td>
                    <td>
                      {facilitiesList.filter(
                        (facility) => facility.id === contract.facilitiyId
                      )[0].facilityName}
                    </td>
                    <td>{contract.startDate}</td>
                    <td>{contract.endDate}</td>
                    <td>{contract.deposit}</td>
                    <td>{contract.totalMoney}</td>
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

export default ContractList;
