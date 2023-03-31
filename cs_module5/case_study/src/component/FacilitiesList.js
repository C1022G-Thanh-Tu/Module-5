import { Component } from "react";

const facilitiesList = [
  {
    facilityImg: "img/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
    facilityName: "PHÒNG SUITE HƯỚNG BIỂN",
    facilityArea: "Diện tích phòng: 85.8 m2",
    facilityRentalCost: "20000",
  },
  {
    facilityImg: "img/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
    facilityName: "PHÒNG SUITE HƯỚNG BIỂN",
    facilityArea: "Diện tích phòng: 85.8 m2",
    facilityRentalCost: "20000",
  },
  {
    facilityImg: "img/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
    facilityName: "PHÒNG SUITE HƯỚNG BIỂN",
    facilityArea: "Diện tích phòng: 85.8 m2",
    facilityRentalCost: "20000",
  },
];

class FacilitiesList extends Component {
  render() {
    return (
      <>
        <div style="max-width:2000px;margin-top:70px">
          <div className="heading-img">
            <h3>LOẠI PHÒNG</h3>
          </div>

          <div className="room container">
            <div className="element-button mb-5">
              <a
                className="btn btn-add btn-sm bg-success text-white"
                href="add-form-facilities.html"
              >
                <i className="fas fa-plus"></i>
                Tạo mới dịch vụ
              </a>
            </div>
            <div className="row">
              {facilitiesList.map((facility, index) => (
                <div className="col-4" key={index}>
                  <div className="card">
                    <img
                      src={facility.facilityImg}
                      className="card-img-top"
                      alt="..."
                      width="370"
                      height="239"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{facility.facilityName}</h5>
                      <p className="card-text">{facility.facilityArea}</p>
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
                        href="edit-form-facilities.html"
                      >
                        <i className="fas fa-edit"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
      </>
    );
  }
}

export default FacilitiesList;