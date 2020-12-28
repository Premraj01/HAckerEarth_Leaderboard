/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { teamDetailsReducer } from './reducers/leaderboardReducer'

const reducer = combineReducers({ teamDetails: teamDetailsReducer })

const initialState = {} //Anything that has to be load Initially(when application loads), Should be put in the here

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
