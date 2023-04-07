import request from '../config/http_request'

const findAll = (data) => {
    return request.get (`/books?title_like=${data.search}`)
}

const save = (book) => {
    request.post('/books', {...book})
}

const remove = (id) => {
    request.delete(`/books/${id}`)
}

const edit = (book) => {
    request.put(`/books/${book.id}`, {...book})
}

const findById = (id) => {
    return request.get (`/books/${id}`)
}

const bookService = {
    findAll,
    save,
    remove,
    edit,
    findById
}

export default bookService