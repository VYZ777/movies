import { useEffect } from 'react'
import { HeaderMegaMenu } from './header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTvShows } from '../store/movies/slice'
import InfoCardReturn from './card'
import '../styles/styles.css'

const TrendTv = () => {
  const trendingTvs = useSelector((state) => state.movies.tvShows)
  const trendingTvShowLoading = useSelector((state) => state.movies.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTvShows())
  }, [])

  if (trendingTvShowLoading) {
    return (
      <div className='center'>
        <div className='loader'></div>
      </div>
    )
  }

  return (
    <div>
      <HeaderMegaMenu></HeaderMegaMenu>
      <h1>Trending Series</h1>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {trendingTvs?.map((el, i) => {
          return <InfoCardReturn el={el} key={i} />
        })}
      </div>
    </div>
  )
}

export default TrendTv
