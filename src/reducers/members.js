import { REMOVE_MEMBER, SET_CATEGORIES, SET_MEMBERS } from "../constants/actionTypes";
import { addMember, removeMember } from "./utility";

const initialState = {
  members: [],
};

const members = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBERS:
      let data = action.payload;
      console.log("datass", data);
  
      return {
        ...state,
        members:addMember(state.members, data),
      };

      case REMOVE_MEMBER:
        return {
            ...state,
             members:removeMember(state.members,action.payload)
        }

    default:
      return state;
  }
};
export default members;
