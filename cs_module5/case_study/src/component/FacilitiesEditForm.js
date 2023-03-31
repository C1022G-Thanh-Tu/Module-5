import { Component } from "react";

class FacilitiesEditForm extends Component {
  render() {
    return (
      <>
        <div>
          <div className="d-flex justify-content-center">
            <div
              className="card"
              style="width: 30%;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); margin-top: 9%; margin-bottom: 100px;"
            >
              <img
                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex mb-2 row">
                  <div className="col-6 pe-0 d-flex align-items-center">
                    <h5 className="card-title" style="font-weight: bold;">
                      Tên dịch vụ
                    </h5>
                  </div>
                  <div className="col-6 px-0">
                    <input
                      type="text"
                      style="border-radius: 5px;"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="d-flex mb-2 row">
                  <div className="col-6 pe-0 d-flex align-items-center">
                    <p className="card-text" style="margin-right: 75px;">
                      Loại dịch vụ:
                    </p>
                  </div>
                  <div className="col-6 px-0">
                    <select
                      defaultValue
                      style="border-radius: 5px; width: 97%;"
                      name="type_room"
                      id="facilities"
                    >
                      <option value="0">Dịch vụ</option>
                      <option value="1">Villa</option>
                      <option value="2">House</option>
                      <option value="3">Room</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex mb-3 row">
                  <div className="col-6 pe-0 d-flex align-items-center">
                    <p
                      className="card-text d-flex align-items-center"
                      style="margin-right: 78px;"
                    >
                      Diện tích sử dụng:
                    </p>
                  </div>
                  <div className="col-6 px-0">
                    <input type="text" style="border-radius: 5px;" />
                  </div>
                </div>
                <div className="d-flex mb-3 row">
                  <div className="col-6 pe-0 d-flex align-items-center">
                    <p
                      className="card-text d-flex align-items-center"
                      style="margin-right: 105px;"
                    >
                      Chi phí thuê:
                    </p>
                  </div>
                  <div className="col-6 px-0">
                    <input type="text" style="border-radius: 5px;" />
                  </div>
                </div>
                <div className="d-flex mb-3 row">
                  <div className="col-6 pe-0 d-flex align-items-center">
                    <p
                      className="card-text d-flex align-items-center"
                      style="margin-right: 105px;"
                    >
                      Số lượng người tối đa:
                    </p>
                  </div>
                  <div className="col-6 px-0">
                    <input type="text" style="border-radius: 5px;" />
                  </div>
                </div>
                <div className="d-flex mb-2 row">
                  <div className="col-6 pe-0 d-flex align-items-center">
                    <p className="card-text" style="margin-right: 75px;">
                      Kiểu thuê:
                    </p>
                  </div>
                  <div className="col-6 px-0">
                    <select
                      style="border-radius: 5px; width: 97%;"
                      name="rental-type"
                      id="rental-type"
                    >
                      <option value="">Ngày</option>
                      <option value="1">Tháng</option>
                      <option value="2">Năm</option>
                    </select>
                  </div>
                </div>
                <div id="villa" style="display: none;">
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Tiêu chuẩn phòng:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="text" style="border-radius: 5px;" />
                    </div>
                  </div>
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Mô tả tiện nghi khác:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="text" style="border-radius: 5px;" />
                    </div>
                  </div>
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Diện tích hồ bơi:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="text" style="border-radius: 5px;" />
                    </div>
                  </div>
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Số tầng:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="number" style="border-radius: 5px;" />
                    </div>
                  </div>
                </div>
                <div id="house" style="display: none;">
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Tiêu chuẩn phòng:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="text" style="border-radius: 5px;" />
                    </div>
                  </div>
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Mô tả tiện nghi khác:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="text" style="border-radius: 5px;" />
                    </div>
                  </div>
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Số tầng:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="number" style="border-radius: 5px;" />
                    </div>
                  </div>
                </div>
                <div id="room" style="display: none;">
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p className="card-text" style="margin-right: 75px;">
                        Dịch vụ đi kèm:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <select
                        defaultValue
                        style="border-radius: 5px; width: 97%;"
                        name="type_room"
                        id="room-aminities"
                      >
                        <option value="0">Dịch vụ đi kèm</option>
                        <option value="1">massage</option>
                        <option value="2">karaoke</option>
                        <option value="3">Thức ăn</option>
                        <option value="4">Nước uống</option>
                        <option value="5">Thuê xe</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div id="room-aminities-props" style="display: none;">
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 78px;"
                      >
                        Đơn vị:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="text" style="border-radius: 5px;" />
                    </div>
                  </div>
                  <div className="d-flex mb-3 row">
                    <div className="col-6 pe-0 d-flex align-items-center">
                      <p
                        className="card-text d-flex align-items-center"
                        style="margin-right: 105px;"
                      >
                        Giá tiền:
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <input type="text" style="border-radius: 5px;" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <button type="button" className="btn btn-success">
                    Sửa
                  </button>
                  <button type="button" className="btn btn-primary">
                    Thoát
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FacilitiesEditForm;