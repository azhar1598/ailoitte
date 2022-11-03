import { SET_CATEGORIES } from "../constants/actionTypes";

const initialState = [];

const categories = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      const data = action.payload;
      console.log('datass',data)
      return {
        ...state,
        data,
      };

    default:
      return state;
  }
};
export default categories;
