
// action creators, functions that tell the reducer what to do essentially
export function depositMoney(amount){
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export function withdrawMoney(amount){
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

// (Actions and dispatch) 0 export to state/index.js