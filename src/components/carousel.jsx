import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel'
import '../styles/styles.css'
import { useEffect, useState } from 'react'
import { Overlay, Title } from '@mantine/core'

function AutoCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }))
  const [upComingMovies, setUpComingMovies] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmJhMWM3YzdlYTI3NzBmZWMwODU4NTVmMDQ2NzMzZiIsInN1YiI6IjY0OGIyNTM3NTU5ZDIyMDBjNTc1MGVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d2q929TqD00HXoEmO2bgc0N7SpaACH2OhtMU_HdvMic',
      },
    }

    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then((response) => response.json())
      .then((response) => setUpComingMovies(response.results))
      .catch((err) => console.error(err))
    console.log(upComingMovies)
  }, [])
  console.log({ upComingMovies })

  return (
    <div>
      <Carousel
        loop
        maw={1500}
        mx='auto'
        height={500}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {upComingMovies.map((el, i) => {
          return (
            <Carousel.Slide key={el.title + i}>
              <div className='carousel-caption'>
                <Overlay
                  gradient='linear-gradient(360deg, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)'
                  opacity={0.85}
                />
                <img
                  className='img-carousel'
                  src={'https://image.tmdb.org/t/p/w500' + el?.backdrop_path}
                />
                <p style={{ color: 'white' }}>{el.title}</p>
              </div>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </div>
  )
}
export default AutoCarousel
