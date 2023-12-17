import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slices/wikiSlice";

const rootReducer=combineReducers({
    counter : counterReducer
})

export default rootReducer