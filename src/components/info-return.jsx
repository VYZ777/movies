import InfoCard from './card'

const InfoReturn = ({ el }) => {
  return (
    <div>
      <div key={el.id}>
        <img src={'https://image.tmdb.org/t/p/w500' + el?.backdrop_path} />
        <h1>{el.title}</h1>
        <h2>Language: {el.original_language}</h2>
        <p>
          Rating: <b>{el.vote_average}</b> Votes: <b>{el.vote_count}</b>
        </p>
        <p>
          <b> Overview: </b>
          {el.overview}
        </p>
        <br />
      </div>
    </div>
  )
}

export default InfoReturn
