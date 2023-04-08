import React from 'react'
import { toast } from "react-toastify";
import customerService from '../../service/customer/customerService';

function ModalDelete(props) {
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await customerService.remove(id);
      toast("Deleted successful");
      props.getList();
    } catch (error) {
      toast("Deleted failed");
    }
  };

  return (
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
            Xóa khách hàng
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          Bạn có muốn xóa <span className="text-danger">{props.name}</span>
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
            className="btn btn-danger"
            onClick={() => handleDelete(props.id)}
            data-bs-dismiss="modal"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalDelete