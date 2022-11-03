
// Function that returns a state (Banker)
export default function accountReducer(state = 0, action ){
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state
    }
}

// (Store and reducers) 0 export to reducers/index.js