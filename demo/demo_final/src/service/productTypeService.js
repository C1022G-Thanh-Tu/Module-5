import request from '../config/http'

const findAll = () => {
    const result = request.get('/productTypes')
    return result
}

const productTypeService = {
    findAll
}

export default productTypeService