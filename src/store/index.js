import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './movies/slice'

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
})
