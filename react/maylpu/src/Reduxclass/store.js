import { createStore } from "redux";
import classReducer from "./reducer";

const storeee = createStore(classReducer);
export default storeee