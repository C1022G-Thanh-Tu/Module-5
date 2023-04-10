import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facilityService from "../../service/facility/facilityService";
import ModalDelete from "../modal/modalDelete";
import ReactPaginate from "react-paginate";
import { Formik, Form, Field } from "formik";

function FacilitiesList() {
  const [facilitiesList, setFacilitiesList] = useState([]);
  const [deletedId, setDeleteId] = useState(0);
  const [deletedName, setDeleteName] = useState("");
  const [deletedType, setDeleteType] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(facilitiesList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(facilitiesList.length / itemsPerPage));
    let firstPage = document.querySelector(".page-next");
    let lastPage = document.querySelector(".page-previous");
    if (firstPage != null && lastPage != null) {
      if (itemOffset === 0) {
        if (endOffset >= facilitiesList.length) {
          firstPage.style.display = "none";
          lastPage.style.display = "none";
        } else {
          firstPage.style.display = "none";
          lastPage.style.display = "block";
        }
      } else if (endOffset > facilitiesList.length) {
        firstPage.style.display = "block";
        lastPage.style.display = "none";
      } else {
        firstPage.style.display = "block";
        lastPage.style.display = "block";
      }
    }
  }, [itemOffset, itemsPerPage, facilitiesList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % facilitiesList.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    getAllFacilities();
  }, []);

  const getAllFacilities = async () => {
    const facilityData = await facilityService.findByName({ search: "" });
    setFacilitiesList(facilityData.data);
  };

  const transferInfo = (id, name, type) => {
    setDeleteId(id);
    setDeleteName(name);
    setDeleteType(type);
  };

  return (
    <>
      <div style={{ maxWidth: "2000px", marginTop: "70px" }}>
        <div className="heading-img">
          <h3>LOẠI PHÒNG</h3>
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
              marginBottom: "20px",
            }}
          >
            Danh sách dịch vụ
          </div>
          <div
            className="element-button mb-5"
            style={{ display: "inline-block" }}
          >
            <Link
              className="btn btn-add btn-sm bg-success text-white"
              to="/facility-add"
            >
              <i className="fas fa-plus"></i>
              Tạo mới dịch vụ
            </Link>
          </div>
          <Formik
            initialValues={{
              search: "",
            }}
            onSubmit={(values) => {
              const getFacilitiesByName = async () => {
                const facilityData = await facilityService.findByName(
                  values.search
                );
                setFacilitiesList(facilityData.data);
              };
              getFacilitiesByName();
            }}
          >
            <Form
              className="col-4"
              style={{ float: "right", width: "100%", padding: "0" }}
            >
              <div className="search-btn">
                <div className="input-group">
                  <Field
                    style={{ border: "1px solid" }}
                    className="form-control"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="tìm kiếm"
                  />
                  <span className="input-group-append">
                    <button
                      style={{ border: "1px solid" }}
                      className="btn bg-white"
                      type="submit"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </Form>
          </Formik>
          <div className="row">
            {currentItems.map((facility, index) => (
              <div className="col-4 mb-3" key={index}>
                <div
                  className="card"
                  style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
                >
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
                        transferInfo(
                          facility.id,
                          facility.facilityName,
                          facility.facility
                        )
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
            type={deletedType}
            getList={() => {
              getAllFacilities();
            }}
          />
          <div className="d-grid">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< "
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              nextLinkClassName="page-previous"
              previousLinkClassName="page-next"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FacilitiesList;
