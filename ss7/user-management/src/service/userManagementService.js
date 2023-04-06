import request from '../config/http_request'

const findAll = () => {
    return request.get('/users')
}

const remove = async (id) => {
    return request.delete(`/users/${id}`)
}

const userManagementService = {
    findAll,
    remove
}

export default userManagementService;