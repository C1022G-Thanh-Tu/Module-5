import request from "../../config/http_request";

const findAll = () => {
  return request.get("/contracts");
};

const findByContractCode = (search) => {
  return request.get(`/contracts?contractCode_like=${search}`);
};

const save = (contract) => {
  request.post("/contracts", { ...contract });
};

const contractService = {
  findAll,
  save,
  findByContractCode,
};

export default contractService;
