import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from './cakeSlice'

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
