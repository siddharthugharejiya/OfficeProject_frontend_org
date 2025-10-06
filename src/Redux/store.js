
import { applyMiddleware, legacy_createStore } from "redux";
import { MainReducer } from "./MainReducer";
import {thunk} from "redux-thunk";
export const store = legacy_createStore(MainReducer, applyMiddleware(thunk))