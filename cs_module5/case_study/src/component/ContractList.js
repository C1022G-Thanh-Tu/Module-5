const contractList = [
  {
    customer: "Nguyễn Văn A",
    facilities: "room",
    contractCode: "HD-1",
    startDate: "2020-12-08",
    endDate: "2020-13-08",
    deposit: "2000000",
    totalMoney: "40000000",
  },
  {
    customer: "Nguyễn Văn B",
    facilities: "villa",
    contractCode: "HD-2",
    startDate: "2021-12-08",
    endDate: "2021-13-08",
    deposit: "1500000",
    totalMoney: "30000000",
  },
];

function CustomerList() {
  return (
    <>
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
            {contractList.map((contract, index) => (
              <tr key = {index}>
                <th scope="row">{++index}</th>
                <td>{contract.contractCode}</td>
                <td>{contract.customer}</td>
                <td>{contract.facilities}</td>
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
    </>
  );
}
