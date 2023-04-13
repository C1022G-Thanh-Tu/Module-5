import request from '../config/http'

const findAll = () => {
    return request.get(`/books`)
}

const findAllWithPageOrName = (page, name) => {
    console.log(page, name);
    return request.get(`/books?page=${page ? page : 0}&name=${name}`)
}

const bookService = {
    findAll,
    findAllWithPageOrName
}

export default bookService