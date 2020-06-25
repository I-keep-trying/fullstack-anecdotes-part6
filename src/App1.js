import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log('App state', state)

  const good = () => {
    dispatch({
      type: 'GOOD',
    })
  }

  const goodAction = (payload) => {
    return {
      type: 'GOOD',
      payload,
    }
  }

  const good2 = () => {
    dispatch(goodAction())
  }

  const ok = () => {
    dispatch({
      type: 'OK',
    })
  }
  const bad = () => {
    dispatch({
      type: 'BAD',
    })
  }
  const reset = () => {
    dispatch({
      type: 'ZERO',
    })
  }
  return (
    <div>
      {/*  */}
      <button onClick={good}>good</button>

      <button onClick={() => dispatch(goodAction())}>good2</button>

      <button onClick={ok}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {state.good}</div>
      <div>neutral {state.ok}</div>
      <div>bad {state.bad}</div>
    </div>
  )
}

export default App
