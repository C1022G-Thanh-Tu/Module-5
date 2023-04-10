import request from '../../config/http_request'

const findAll = () => {
    return request.get('/contracts')
}

const save = (contract) => {
    request.post('/contracts', {...contract})
}

const contractService = {
    findAll,
    save
}

export default contractService