import request from "../config/http";

const findAll = () => {
  return request.get(`/books`);
};

const findAllWithPageOrName = ({ page, name, type }) => {
  return request.get(
    `/books?page=${page ? page : 0}&name=${name}&bookTypeId=${type}`
  );
};

const save = (book) => {
  return request.post(`/books`, {...book})
}

const remove = (id) => {
  return request.delete(`/books/${id}`)
}

const bookService = {
  findAll,
  findAllWithPageOrName,
  save,
  remove
};

export default bookService;
 