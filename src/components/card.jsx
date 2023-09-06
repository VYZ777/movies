import { Card, Image, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

function InfoCard({ id, el }) {
  return (
    <Card
      style={{ width: '20rem', margin: '1rem', backgroundColor: '#343432' }}
      shadow='sm'
      padding='xs'
      component='div'
    >
      <Card.Section>
        <Link to={el?.media_type === 'movie' ? `/movies/${id}` : `/tvs/${id}`}>
          <Image
            src={'https://image.tmdb.org/t/p/w500' + el?.backdrop_path}
            height={250}
            width={320}
            alt='No way!'
            className='image-card'
          />
        </Link>
      </Card.Section>
      <Link to={el?.media_type === 'movie' ? `/movies/${id}` : `/tvs/${id}`}>
        <Text color='white' weight={600} size='md' mt='md'>
          {el?.title || el?.name}
        </Text>
      </Link>

      <Text mt='xs' color='dimmed' size='sm'>
        {el?.overview?.length > 100
          ? el?.overview.slice(0, 100) + '...'
          : el?.overview}{' '}
      </Text>
    </Card>
  )
}

function InfoCardReturn({ el }) {
  return (
    <div>
      <InfoCard key={el.id} id={el.id} el={el} />
    </div>
  )
}

export default InfoCardReturn
