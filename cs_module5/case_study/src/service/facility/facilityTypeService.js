import request from '../../config/http_request'

const findAll = () => {
    return request.get('/facilityTypes')
}

const facilityTypeService = {
    findAll
}

export default facilityTypeService