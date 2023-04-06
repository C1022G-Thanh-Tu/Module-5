import { USER_LIST_ACTION, USER_DELETE_ACTION } from './type'
import userManagementService from '../../service/userManagementService'

export const userListAction = () => async (dispatch) => {
    try {
        const resposne = await userManagementService.findAll()
        dispatch ({
            type: USER_LIST_ACTION,
            payload: resposne.data
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
            type: USER_DELETE_ACTION
        })
    } catch (error) {
        console.log(error);
        alert ('deleted failed')
    }
}