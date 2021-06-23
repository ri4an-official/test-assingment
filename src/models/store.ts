import { logger } from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import todosReducer from './todosReducer'
import userReducer, { watchUser } from './userReducer'

const reducer = combineReducers({
    todosReducer,
    userReducer,
})
export type State = ReturnType<typeof reducer>
const saga = createSagaMiddleware()

export const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), saga, logger],
    devTools: process.env.NODE_ENV !== 'production',
})
saga.run(watchUser)
