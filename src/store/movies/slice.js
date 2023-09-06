import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const moviesApi = async (url) => {
  const raw = await fetch(url, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmJhMWM3YzdlYTI3NzBmZWMwODU4NTVmMDQ2NzMzZiIsInN1YiI6IjY0OGIyNTM3NTU5ZDIyMDBjNTc1MGVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d2q929TqD00HXoEmO2bgc0N7SpaACH2OhtMU_HdvMic',
    },
  })
  const response = await raw.json()
  return response.results
}

export const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async () => {
    const response = await moviesApi(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    )
    return response
  }
)

export const fetchTvShows = createAsyncThunk(
  'movies/fetchTvShows',
  async () => {
    const response = await moviesApi(
      'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
    )
    return response
  }
)

export const fetchTrendingAll = createAsyncThunk(
  'movies/fetchTrendingAll',
  async () => {
    const response = await moviesApi(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US'
    )
    return response
  }
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    trendings: [],
    tvShows: [],
    all: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.trendings = [...action.payload]
      state.loading = false
    })
    builder.addCase(fetchTrendingMovies.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchTvShows.fulfilled, (state, action) => {
      state.tvShows = [...action.payload]
      state.loading = false
    })
    builder.addCase(fetchTvShows.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchTrendingAll.fulfilled, (state, action) => {
      state.all = [...action.payload]
      state.loading = false
    })
    builder.addCase(fetchTrendingAll.pending, (state, action) => {
      state.loading = true
    })
  },
})
