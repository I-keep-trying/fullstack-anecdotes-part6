import React from 'react'
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const counterAction = payload => {
  return {
    type: 'INCREMENT',
    payload
  }
}

const store = createStore(counterReducer)
console.log('store index.js', store.getState())
const Counter = () => {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={e => store.dispatch(counterAction)}>plus</button>
      <button onClick={e => store.dispatch({ type: 'DECREMENT' })}>
        minus
      </button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })}>zero</button>
    </div>
  )
}

export default Counter
