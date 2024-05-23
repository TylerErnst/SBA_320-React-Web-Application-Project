import { useReducer } from 'react'
import './App.css'
import { useState } from 'react';

import AddTask from './components/AddTask'
import TaskList from './components/TaskList';
import initialState from './initialState';


function App() {

  // state is the current state (before the change)
  // action is the information from dispatch
  function reducer(state, action) {
    // ..
    console.log('state:', state); // 0
    console.log('action: ', action); // increment, decrement, reset

    switch (action.type) {
      case 'add_task':
        let newList = [action.payload, ...state]
        console.log('newlist', newList)
        return newList

      
      default:
        return state

    }
  }

  // dispatch -> reducer gets info from dispatch -> and returns a new state
  
  // const [state, dispatch] = useReducer(reducer, 'text', (text) => {})
  const [state, dispatch] = useReducer(reducer, initialState)
 
  return (
    <>
      <br />
      <h1>Create Todo List</h1>
      <br />
      <AddTask dispatch={dispatch}/>
      <TaskList dispatch={dispatch} state={state}/>

      {/* <button onClick={() => dispatch({ type: 'increment', payload: num })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: num })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'setNumber', payload: num })}>Set Number</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <br />
      <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))}/> */}
    </>
  )
}

export default App
