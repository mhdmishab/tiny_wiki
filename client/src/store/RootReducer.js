import { combineReducers } from "@reduxjs/toolkit";
import wikiReducer from "../slices/wikiSlice";
import adminReducer from "../slices/adminSlice";

const rootReducer=combineReducers({
    wiki : wikiReducer,
    admin: adminReducer
})

export default rootReducer