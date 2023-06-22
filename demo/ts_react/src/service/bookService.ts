import { UpdatedBook } from './../type/bookType';
import request from "../config/http";
import { BookFilter, AddedBook } from "../type/bookType";

const findAll = ({page, name, id}:BookFilter) => {
    return request.get(`/books?page=${page?page:0}&name=${name}&bookTypeId=${id}`);
};

const save = (book:AddedBook) => {
    return request.post(`/books`, {...book})
}

const update = (book:UpdatedBook) => {
    return request.put(`/books`, {...book})
}

const remove = (id:number | string) => {
    return request.delete(`/books/${id}`)
}

const findById = (id?:number | string) => {
    return request.get(`/books/${id}`)
}

const bookService = {
    findAll,
    remove,
    save,
    findById,
    update
}


export default bookService