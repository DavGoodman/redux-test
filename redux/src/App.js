
import './App.css';

import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"

function App() {

  const state = useSelector((state)=> state.account) //returns state from inside of store.js
  const dispatch = useDispatch() // function/var to dispatch 

  // binds actionCreators with dispatch func
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch) 


  console.log(state)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>depositMoney(1000)}>deposit</button>
      <button onClick={()=>withdrawMoney(1000)}>withdraw</button>
    </div>
  );
}

export default App;
