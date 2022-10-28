import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import thunk from "redux-thunk";
import rootReducers from "./rootReducer";

const store = createStore(rootReducers, applyMiddleware(logger, thunk));

export default store;
