import {
  createStyles,
  Image,
  Container,
  Title,
  Group,
  Text,
  List,
  rem,
} from '@mantine/core'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  content: {
    maxWidth: rem(300),
    marginRight: `calc(${theme.spacing.xl} * 3)`,
  },

  title: {
    color: 'white',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,
  },
}))

export function HeroBulletsTv() {
  const { classes } = useStyles()
  const [allTv, setAllTv] = useState([])
  const [el, setEl] = useState({})
  const params = useParams()

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
      'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setAllTv(response.results)
        console.log(response?.results, 'response result')
        const tv = response.results?.find((tv) => {
          console.log(tv?.id, '===', params?.tvId)
          return tv?.id?.toString() === params?.tvId
        })
        setEl(tv)
      })
      .catch((err) => console.error(err))
  }, [params])

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>{el?.name}</Title>
            <Text color='dimmed' mt='md'>
              {el?.overview}
            </Text>

            <List mt={30} spacing='xl' size='md'>
              <List.Item style={{ color: 'white' }}>
                <b>{el?.adult ? <p>18+</p> : <p>12+</p>}</b>
              </List.Item>
              <List.Item style={{ color: 'white' }}>
                <b>Language:</b> {el?.original_language}
              </List.Item>
              <List.Item style={{ color: 'white' }}>
                <b>Rating:</b> {el?.vote_average} <b>Votes:</b> {el?.vote_count}
              </List.Item>
              <List.Item style={{ color: 'white' }}>
                <b>Release Date:</b> {el?.release_date}
              </List.Item>
            </List>

            <Group mt={30}></Group>
          </div>
          <Image
            radius={'md'}
            src={'https://image.tmdb.org/t/p/w500' + el?.backdrop_path}
          />
        </div>
      </Container>
    </div>
  )
}
