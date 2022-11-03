import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk"

// stores reducers second parameter is default state and third is something to do with
// compatibility issues
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

// 2 export to Index.js (main)