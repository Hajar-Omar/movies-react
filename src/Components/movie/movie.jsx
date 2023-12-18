import './movie.css';

const Movie = ({ movie }) => {
const defaultImgSrc = 'https://placehold.co/400x600';

  return (
    <div className="movie w-25 d-flex flex-column justify-content-between">
     <div><h1>{movie.title}</h1>
      <img
      src={movie.posterURL}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src= defaultImgSrc;
      }}
      alt={movie.posterURL} /></div> 
    <span>Rate: {movie.imdbId}</span>
    </div>
  );
};

export default Movie;
