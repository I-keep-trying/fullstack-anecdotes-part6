const filterReducer = (state = {}, { type, payload }) => {
  console.log('filter action: ', payload)
  switch (type) {
    case 'SET_FILTER':
      return { ...state, payload }
    default:
      return state
  }
}

export default filterReducer
