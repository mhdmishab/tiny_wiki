import { combineReducers } from "@reduxjs/toolkit";
import wikiReducer from "../slices/wikiSlice";

const rootReducer=combineReducers({
    wiki : wikiReducer
})

export default rootReducer