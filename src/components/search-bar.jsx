import { useState, useEffect, forwardRef } from 'react'
import { Autocomplete, Loader, Group, Avatar, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

export function InputWithButton(props) {
  const [allMovies, setAllMovies] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const handleChange = (val) => {
    setValue(val)
  }

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
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      options
    )
      .then((response) => response.json())
      .then((response) => setAllMovies(response?.results))

      .catch((err) => console.error(err))
  }, [value])
  return (
    <div>
      <Autocomplete
        styles={{ input: { backgroundColor: '#262725' } }}
        className='search-bar'
        value={value}
        data={allMovies?.map((movie) => ({
          value: movie.title,
          id: movie.id,
          image: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path,
        }))}
        onChange={handleChange}
        rightSection={loading ? <Loader size='1rem' /> : null}
        placeholder='Looking for movie?'
        itemComponent={AutoCompleteItem}
      />
    </div>
  )
}

const AutoCompleteItem = forwardRef(({ id, value, image, ...others }, ref) => {
  console.log({ others })
  return (
    <div ref={ref}>
      <Link to={`/movies/${id}`}>
        <Group noWrap>
          <Avatar src={image} />

          <div>
            <Text>{value}</Text>
          </div>
        </Group>
      </Link>
    </div>
  )
})
