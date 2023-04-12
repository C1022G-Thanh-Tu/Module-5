import request from '../config/http'

const findAll = () => {
    return request.get('/productTypes')
}

const productTypeServiceAPI = {
    findAll
}

export default productTypeServiceAPI