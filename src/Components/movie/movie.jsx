import "./movie.css";

const Movie = ({ movie }) => {
  const defaultImgSrc = "https://placehold.co/400x600";

  const addToCart = (movie) => {
    console.log(movie);
  };

  return (
    <div className="movie w-25 d-flex flex-column justify-content-between">
      <div>
        <h2>{movie.title}</h2>
        <img
          src={movie.posterURL}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = defaultImgSrc;
          }}
          alt={movie.posterURL}
          title={movie.title}
        />
      </div>
      <button
        onClick={() => {
          addToCart(movie);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Movie;
