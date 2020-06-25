import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import filterItems from '../actions/filterActions'

const Filter = ({ onSubmit, onClick }) => {
  const dispatch = useDispatch()

  const anecdotes = useSelector((state) => state.anecdotes)

  const filterState = useSelector((state) => state.filter.payload)

  /*   let filteredAnecdotes =
    filterState === undefined
      ? anecdotes
      : anecdotes.filter((a) => {
          return a.content.toLowerCase().includes(filterState.toLowerCase())
        })
 */
  const handleChange = (e) => {
    e.preventDefault()
    const filterTerm = e.target.filter2.value
    console.log('Filter.js input', filterTerm)
    dispatch(filterItems(filterTerm))
    e.target.filter2.value = ''
  }

  /*   const handleReset = () => {
    return (filteredAnecdotes = anecdotes)
  } */

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter
      <form onSubmit={handleChange}>
        <input name="filter2" />
        <button type="submit">search</button>
        <button onClick={onClick}>reset</button>
      </form>
    </div>
  )
}

export default Filter
