import { useEffect } from 'react'
import { HeaderMegaMenu } from './header'
import InfoCardReturn from './card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingMovies } from '../store/movies/slice'
import '../styles/styles.css'

const TrendMovies = () => {
  const trendingMovies = useSelector((state) => state.movies.trendings)
  const trendingMoviesLoading = useSelector((state) => state.movies.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTrendingMovies())
  }, [])

  if (trendingMoviesLoading) {
    return (
      <div className='center'>
        <div className='loader'></div>
      </div>
    )
  }

  return (
    <div>
      <HeaderMegaMenu></HeaderMegaMenu>
      <h1>Trending Movies</h1>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {trendingMovies &&
          trendingMovies.length > 0 &&
          trendingMovies?.map((el, i) => {
            return <InfoCardReturn el={el} key={i} />
          })}
      </div>m
    </div>
  )
}

export default TrendMovies
