import request from "../../config/http_request";

const findAll = () => {
  return request.get("/contracts");
};

const findByContractCode = async (search) => {
  const rs = await request.get(`/contracts?contractCode_like=${search}`);
  return rs
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
