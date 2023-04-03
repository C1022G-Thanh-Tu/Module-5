function ContractAddhtmlForm() {
  return (
    <>
      <div className="testbox" style="margin-top: 70px;">
        <div className="">
          <h1>Thêm mới hợp đồng</h1>
          <div className="item">
            <label htmlFor="contract-code">Số hợp đồng</label>
            <input
              type="text"
              name="contract-code"
              placeholder=""
              id="contract-code"
            />
          </div>
          <div className="item">
            <label htmlFor="customers">Khách hàng</label>
            <input type="text" name="customers" id="customers" />
          </div>
          <div className="item">
            <label htmlFor="facilities">Dịch vụ</label>
            <input type="text" name="facilities" id="facilities" />
          </div>
          <div className="item">
            <label htmlFor="start-date">Ngày bắt đầu</label>
            <input type="date" name="start-date" id="start-date" required />
          </div>
          <div className="item">
            <label htmlFor="end-date">Ngày kết thúc</label>
            <input type="date" name="end-date" id="end-date" required />
          </div>
          <div className="item">
            <label htmlFor="deposit">Số tiền cọc trước</label>
            <input type="text" name="deposit" id="deposit" />
          </div>
          <div className="item">
            <label htmlFor="total-payment">Tổng số tiền thanh toán</label>
            <input type="text" name="total-payment" id="total-payment" />
          </div>
          <div className="btn-block">
            <button type="button" style="background-color: #198754">
              Sửa
            </button>
            <button type="button" style="background-color: #0d6efd">
              Thoát
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


export default ContractAddhtmlForm;