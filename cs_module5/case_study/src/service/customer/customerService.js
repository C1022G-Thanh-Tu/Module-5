import request from "../../config/http_request";

const findAll = () => {
  return request.get(`/customers`);
};

const save = (customer) => {
  request.post('/customers', {...customer})
} 

const remove = (id) => {
  request.delete(`/customers/${id}`)
}

const findById = (id) => {
  return request.get(`customers/${id}`)
}

const edit = (customer) => {
  request.put(`/customers/${customer.id}`, {...customer})
}

const customerService = {
  findAll,
  save,
  remove,
  findById,
  edit
};


export default customerService;
