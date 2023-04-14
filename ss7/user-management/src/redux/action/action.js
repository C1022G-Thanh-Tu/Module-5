import { USER_LIST_ACTION, USER_DELETE_ACTION } from './type'
import userManagementService from '../../service/userManagementService'

export const userListAction = () => async (dispatch) => {
    try {
        const response = await userManagementService.findAll()
        dispatch ({
            type: USER_LIST_ACTION,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const userDeleteAction = (id) => async (dispatch) => {
    try {
        await userManagementService.remove(id)
        alert ('deleted successful')
        dispatch ({
            type: USER_DELETE_ACTION,
            payload: id
        })
    } catch (error) {
        console.log(error);
        alert ('deleted failed')
    }
}