import { createStore } from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)
console.log('store.getState()', store.getState())
export default store
