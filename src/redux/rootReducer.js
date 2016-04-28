import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import books from './modules/books'
import services from './modules/services'

export default combineReducers({
  counter,
  router,
  books,
  services
  // syncReducer
})
