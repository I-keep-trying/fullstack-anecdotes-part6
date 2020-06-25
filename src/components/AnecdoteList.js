import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../actions/voteAction'
import { displayNotification } from '../actions/notificationAction'
import filterItems from '../actions/filterActions'
import Filter from '../components/Filter'
import Anecdote from './Anecdote'

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => state.anecdotes)

  const filterState = useSelector((state) => state.filter.payload)

  const dispatch = useDispatch()

  let filteredAnecdotes =
    filterState === undefined
      ? anecdotes
      : anecdotes.filter((a) => {
          return a.content.toLowerCase().includes(filterState.toLowerCase())
        })

  const sortedAnecdotes =
    filterState === undefined
      ? anecdotes.sort((a, b) => {
          return b.votes - a.votes
        })
      : filteredAnecdotes.sort((a, b) => {
          return b.votes - a.votes
        })

  const handleVote = (id) => {
    const anecdote = sortedAnecdotes.find((a) => a.id === id)
    dispatch(addVote(anecdote.id))
    dispatch(
      displayNotification({
        message: `you voted for " ${anecdote.content} " `,
        status: 'ok',
      })
    )
    setTimeout(() => dispatch(displayNotification({})), 3000)
  }

    const handleFilterChange = (e) => {
    e.preventDefault()
    const filterTerm = e.target.filter.value
console.log('filter input - AnecdoteList', filterTerm)
    dispatch(filterItems(filterTerm))
    e.target.filter.value = ''
  } 
  
  const handleFilterSubmit = () => {
    
  }
 

  const handleReset = () => {
    return (filteredAnecdotes = anecdotes)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
            <form onSubmit={handleFilterSubmit}>
        Filter:
        <input name="filter" onChange={handleFilterChange} />
        <button type="submit">search</button>
        <button onClick={handleReset}>reset</button>
      </form>
      <hr />
      Filter:
      {/*   {filter2()}{' '} */}
      <Filter onSubmit={filteredAnecdotes} onClick={handleReset} />
      <ul>
        {sortedAnecdotes.map((a) => (
          <Anecdote key={a.id} a={a} onClick={() => handleVote(a.id)} />
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList
