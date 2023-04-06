import { USER_DELETE_ACTION, USER_LIST_ACTION } from "../action/type";
import * as userManagementService from "../../service/userManagementService";

const initialState = [];

export const manageUser = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case USER_LIST_ACTION:
      const getUsers = async () => {
        const result = await userManagementService.findAll();
        newState = result.data;
      };
      getUsers();
      break;
    case USER_DELETE_ACTION:
      const handleDelete = async (action) => {
        try {
          await userManagementService.remove(action.payload);
          alert("Deleted successful");
        } catch (error) {
          alert("Deleted failed");
        }
      };
      handleDelete()
      break;
    default:
      return state;
  }
  return newState;
};
