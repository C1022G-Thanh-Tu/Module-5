import { combineReducers } from 'redux'
import { manageUserReducer } from './userMangementReducer'

export const rootReducer = combineReducers ({
    userManagementState: manageUserReducer
})