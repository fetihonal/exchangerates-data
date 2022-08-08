import { ADD_TO_HISTORY } from "../constant/actionTypes";

console.log();
const historyReducerDefaultState = {
  data: JSON.parse(localStorage.getItem("state"))?.history.data
    ? JSON.parse(localStorage.getItem("state")).history.data
    : [],
};

const historyReducer = (state = historyReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        data: [...state.data, action.data],
      };
    default:
      return state;
  }
};

export default historyReducer;
