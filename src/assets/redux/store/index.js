import { legacy_createStore as createStore } from "redux";
import mainReducer from "../reducers";

const store = createStore(mainReducer);

export default store;
