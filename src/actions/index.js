import {
  GET_CATEGORIES,
  GET_MEMBERS,
  REMOVE_MEMBER,
  SET_CATEGORIES,
  SET_MEMBERS,
} from "../constants/actionTypes";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
  };
};

export const setCategories = (payload) => {
  return {
    type: SET_CATEGORIES,
    payload: payload,
  };
};

export const getMembers = () => {
  return {
    type: GET_MEMBERS,
  };
};

export const setMembers = (payload) => {
  console.log("paulload", payload);

  return {
    type: SET_MEMBERS,
    payload: payload,
  };
};

export const removeMember = (payload) => {
    console.log('payyload',payload)
    return {
      type: REMOVE_MEMBER,
      payload: payload,
    };
  };
  
