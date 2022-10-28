import { combineReducers } from "redux";
import randomUsersReducer from "./allUsersReducer";
import femaleUsersReducers from "./female/reducer";
import maleUsersReducers from "./male/reducer";
import singleUserReducers from "./singleUser/reducer";

const rootReducers = combineReducers({
  allUsers: randomUsersReducer,
  femaleUsers: femaleUsersReducers,
  maleUsers: maleUsersReducers,
  singleUser: singleUserReducers
});

export default rootReducers;
