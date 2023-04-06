import { USER_LIST_ACTION, USER_DELETE_ACTION } from './type'

export const userListAction = () => {
    return (
        {
            type: USER_LIST_ACTION
        }
    )
}

export const userDeleteAction = (payload) => {
    return (
        {
            type: USER_DELETE_ACTION,
            payload: payload
        }
    )
}