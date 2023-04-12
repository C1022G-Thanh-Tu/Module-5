import React from "react";
import { toast } from "react-toastify";
// import productService from "../service/productService";
import productServiceAPI from "../service/productServiceAPI";

function ModalDelete(props) {
  const handleDelete = async (id) => {
    try {
      await productServiceAPI.remove(id);
      toast("Deleted Success");
      props.getList();
    } catch (error) {
      toast("Deleted Failed");
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Confirm delete product{" "}
              <span className="text-danger">{props.name}</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-danger"
                onClick={() => handleDelete(props.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDelete;
