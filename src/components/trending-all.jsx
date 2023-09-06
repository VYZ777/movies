import { HeaderMegaMenu } from './header'

import { useEffect } from 'react'
import InfoCardReturn from './card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendingAll } from '../store/movies/slice'

const TrendAll = () => {
  const trendingAll = useSelector((state) => state.movies.all)
  const trendingAllLoading = useSelector((state) => state.movies.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTrendingAll())
  }, [])

  if (trendingAllLoading) {
    return (
      <div className='center'>
        <div className='loader'></div>
      </div>
    )
  }

  console.log(trendingAll, 'trendingAll')
  return (
    <div>
      <HeaderMegaMenu></HeaderMegaMenu>
      <h1>All Trending Movies and Series</h1>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {trendingAll?.map((el, i) => {
          return <InfoCardReturn el={el} key={i} />
        })}
      </div>
    </div>
  )
}

export default TrendAll
