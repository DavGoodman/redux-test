import { combineReducers } from "redux"
import accountReducer from "./accountReducer"

// combines all reducers
const reducers = combineReducers({
    account: accountReducer
})

//1 export to store.js
export default reducers