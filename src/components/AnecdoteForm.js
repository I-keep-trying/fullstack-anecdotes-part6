import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../actions/anecdoteAction'
import { displayNotification } from '../actions/notificationAction'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const newAnecdote = (e) => {
    e.preventDefault()
    const newItem = e.target.item.value
    e.target.item.value = ''
    const notify = { message: 'Anecdote was added', status: 'ok' }
    dispatch(addAnecdote(newItem))
    dispatch(displayNotification(notify))
    setTimeout(() => dispatch(displayNotification({})), 3000)
  }

  return (
    <form onSubmit={newAnecdote}>
      <h3>
        <i> Add New Anecdote</i>
      </h3>
      <input name="item" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm
