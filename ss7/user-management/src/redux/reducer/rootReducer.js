import { combineReducers } from 'redux'
import {manageUser} from './userMangementReducer'

export const rootReducer = combineReducers ({
    userManagementState: manageUser
})