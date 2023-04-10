import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facilityService from "../../service/facility/facilityService";
import ModalDelete from "../modal/modalDelete";

function FacilitiesList() {
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [deletedId, setDeleteId] = useState(0);
  const [deletedName, setDeleteName] = useState("");
  const [deletedType, setDeleteType] = useState("")

  useEffect(() => {
    getAllFacilities();
  }, []);

  const getAllFacilities = async () => {
    const facilityData = await facilityService.findAll();
    setFacilitiesList(facilityData.data);
  };

  const transferInfo = (id, name, type) => {
    setDeleteId(id)
    setDeleteName(name)
    setDeleteType(type)
  }

  return (
    <>
      <div style={{ maxWidth: "2000px", marginTop: "70px" }}>
        <div className="heading-img">
          <h3>LOẠI PHÒNG</h3>
        </div>

        <div className="room container">
          <div className="element-button mb-5">
            <Link
              className="btn btn-add btn-sm bg-success text-white"
              to="/facility-add"
            >
              <i className="fas fa-plus"></i>
              Tạo mới dịch vụ
            </Link>
          </div>
          <div className="row">
            {facilitiesList.map((facility, index) => (
              <div className="col-4 mb-3" key={index}>
                <div className="card">
                  <img
                    src={facility.facilityImg}
                    className="card-img-top"
                    alt="..."
                    width={370}
                    height={239}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{facility.facilityName}</h5>
                    <p className="card-text">{facility.facilityArea}</p>
                    <button
                      style={{ marginRight: "5px" }}
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() =>
                        transferInfo(facility.id, facility.facilityName, facility.facility)
                      }
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                    <Link
                      className="btn btn-primary btn-sm edit"
                      to={`/facility-edit/${facility.id}`}
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ModalDelete
            id={deletedId}
            name={deletedName}
            type = {deletedType}
            getList={() => {
              getAllFacilities();
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
    </>
  );
}

export default FacilitiesList;
