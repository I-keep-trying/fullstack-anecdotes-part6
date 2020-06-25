const filterItems = (payload) => {
  console.log('action payload', payload)
  return {
    type: 'SET_FILTER',
    payload,
  }
}

export default filterItems
