import { USER_DELETE_ACTION, USER_LIST_ACTION } from "../action/type";

const initialState = [];

export const manageUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST_ACTION:
      return action.payload
    case USER_DELETE_ACTION:
      const deletedSate = state.filter((element) => element.id !== action.payload)
      return deletedSate
    default:
      return state;
  }
};
