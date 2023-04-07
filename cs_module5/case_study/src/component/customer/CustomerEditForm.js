function CustomerEditForm() {
  return (
    <>
      <div className="testbox" style={{marginTop: '70px'}}>
        <div className="">
          <h1>Chỉnh sửa thông tin khách hàng Khách hàng</h1>
          <div className="item">
            <label htmlFor="name">Họ tên</label>
            <input type="text" name="name" placeholder="" id="name" />
          </div>
          <div className="item">
            <label htmlFor="date-of-birth">Ngày sinh</label>
            <input
              type="date"
              name="date-of-birth"
              id="date-of-birth"
              required
            />
          </div>
          <div className="item">
            <label htmlFor="gender">Giới tính</label>
            <div className="col-md-12">
              <input
                required
                type="radio"
                className="gender"
                id="men"
                name="gender"
                value="true"
              />
              <label htmlFor="men">Nam</label>
              <input
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
            <input type="text" name="identity-number" id="identity-number" />
          </div>
          <div className="item">
            <label htmlFor="phone-number">Số Điện Thoại</label>
            <input type="text" name="phone-number" id="phone-number" />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
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
            <input type="text" name="address" id="address" />
          </div>
          <div className="btn-block">
            <button type="button" style={{backgroundColor: '#198754'}}>
              Sửa
            </button>
            <button type="button" style={{backgroundColor: '#0d6efd'}}>
              Thoát
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerEditForm;