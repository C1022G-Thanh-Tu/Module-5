import request from "../../config/http_request";

const findAll = () => {
  return request.get("/facilities");
};

const save = (facility) => {
  request.post("/facilities", { ...facility });
};

const findByName = (search) => {
  return request.get(`/facilities?facilityName_like=${search}`);
};

const remove = (id) => {
  request.delete(`/facilities/${id}`);
};

const edit = (facility) => {
  request.put(`/facilities/${facility.id}`, { ...facility });
};

const findById = (id) => {
  return request.get(`/facilities/${id}`);
};

const facilityService = {
  findAll,
  save,
  remove,
  edit,
  findById,
  findByName
};

export default facilityService;
