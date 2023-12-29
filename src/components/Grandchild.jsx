import {useContext} from 'react'
import {AppContext} from './../App'



export default function Grandchild() {
  const state = useContext(AppContext);
  
   return (
    <>
    <h1>{state.value}</h1>
    <h1>{state.count}</h1>
    </> 
    )
  }

