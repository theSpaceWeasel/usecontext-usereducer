import { useState, useReducer, createContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Child from './components/Grandchild'
import './App.css'

const init={
  count:0,
  value:""
}

const reducer = (state, action) => {
  switch(action.type){
  case "increment":
    return {...state, count: state.count+1}
  case "typing": 
    return {...state, value: action.payload}
  default:
    return state;  
  }

}

  export const AppContext = createContext(null);

function App() {
  console.log("rerenderd")
  // const [count, setCount] = useState(0)
  // const [value, setValue] = useState("")
  const [state, dispatch] = useReducer(reducer, init)

  return (
    <AppContext.Provider value={state}>
    <>
      <h1>{state.value}</h1>
      <div className="card">
        <button onClick={() => dispatch({type:"increment"})}>
          count is {state.count}
        </button>
        <input type="text" value={state.value} onChange={(e)=>dispatch({type:"typing",payload:e.target.value})}/>
      </div>
      <Child />
      
    </>
    </AppContext.Provider>
  )
}

export default App
  