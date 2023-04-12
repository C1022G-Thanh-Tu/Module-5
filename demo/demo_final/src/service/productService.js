import request from '../config/http'

const findAll = () => {
    return request.get(`/products`)
}

const save = (product) => {
    request.post(`/products`, {...product})
}

const remove = (id) => {
    request.delete(`/products/${id}`)
}

const findById = (id) => {
    return request.get(`/products/${id}`)
}

const edit = (product) => {
    request.put(`/products/${product.id}`, {...product})
}

const productService = {
    findAll,
    save,
    remove,
    findById,
    edit
}


export default productService