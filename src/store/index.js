import { createStore, combineReducers } from 'redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'

const allReducers = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer,
  filter: filterReducer,
})

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialStateAnecdotes = anecdotesAtStart.map(asObject)

const initialStateNotifications = {}

const initialStates = {
  anecdotes: initialStateAnecdotes,
  notifications: initialStateNotifications,
  filter: '',
}
const store = createStore(allReducers, initialStates)
console.log('store index.js', store.getState())
export default store
