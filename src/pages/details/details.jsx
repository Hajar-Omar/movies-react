import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Movie from "../../components/movie/movie";

const Details = () => {
  const { type, id } = useParams();

  // selectors
  const currentSelectedMovie = useSelector((state) => state.selectedMovie); // Accessing current Redux state, instead of store.getState().moviesType

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>
        Details: {id} - {type}
      </h1>
      <Movie cols="col-lg-6" movie={currentSelectedMovie}></Movie>
    </div>
  );
};

export default Details;
