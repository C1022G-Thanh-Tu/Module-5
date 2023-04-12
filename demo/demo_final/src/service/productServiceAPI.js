import request from "../config/http";

const findAll = () => {
  return request.get(`/products`);
};

const save = (product) => {
  return request.post(`/products`, { ...product });
};

const remove = (id) => {
  return request.delete(`/products/${id}`);
};

const findById = (id) => {
    return request.get(`/products/${id}`);
}

const edit = (product) => {
    return request.put(`/products`, { ...product })
}

const productServiceAPI = {
  findAll,
  save,
  remove,
  findById,
  edit
};

export default productServiceAPI;
