import request from '../../config/http_request'

const findAll = () => {
    return request.get('/contracts')
}

const contractService = {
    findAll
}

export default contractService