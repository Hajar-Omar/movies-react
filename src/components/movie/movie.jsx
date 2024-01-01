import { useNavigate } from "react-router-dom";
import "./movie.css";
import { useSelector } from "react-redux";
import store from '../../+state/store'
import { selectedMovieChanged } from "../../+state/actions";
//import { useContext } from "react";
//import { TypeContext } from "../../shared/context";

const Movie = ({ movie, cols= 'col-md-6 col-lg-4 col-xl-3' }) => {
  const defaultImgSrc = "https://placehold.co/400x600";
  const navigate = useNavigate();
  //const type = useContext(TypeContext);

  // selectors
  const currentMoviesType = useSelector((state) => state.moviesType); // Accessing current Redux state, instead of store.getState().moviesType

  const addToCart = (movie) => {
    console.log(movie);
  };

  const handleNaviagte = (id) => {
    store.dispatch(selectedMovieChanged(movie))
    navigate(`/details/${currentMoviesType}/${id}`);
  };

  return (
    <div className={`col-12 ${cols} d-flex flex-column justify-content-between px-3 my-3`}>
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
          onClick={() => handleNaviagte(movie.imdbId)}
        />
        <span className="">{currentMoviesType}</span>
      </div>
      <button onClick={() => addToCart(movie)}>Add to Favourite</button>
    </div>
  );
};

export default Movie;
