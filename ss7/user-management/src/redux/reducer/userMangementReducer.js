import { USER_DELETE_ACTION, USER_LIST_ACTION } from "../action/type";

const initialState = [];

export const manageUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_ACTION:
      return action.payload
    case USER_DELETE_ACTION:
      return [...state]
    default:
      return state;
  }
};
