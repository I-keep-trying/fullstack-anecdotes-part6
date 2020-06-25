const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_ANECDOTE':
      const newAnecdote = {
        content: payload,
        id: getId(),
        votes: 0,
      }
      return [...state, newAnecdote]
    case 'VOTE': {
      const id = payload
      console.log('anecdoteReducer payload', state)

      const selectedAnecdote = state.find((n) => n.id === id)

      const votedAnecdote = {
        ...selectedAnecdote,
        votes: selectedAnecdote.votes + 1,
      }
      console.log('anecdoteReducer votedAnecdote', votedAnecdote)

      return state.map((a) => (a.id !== id ? a : votedAnecdote))
    }

    default:
      return state
  }
}

export default anecdoteReducer
