import { combineReducers } from "redux";
import History from "./history.reducer";
const reducers = combineReducers({
  data: [],
  history: History,
});

export default reducers;
