import { useEffect, useState } from "react";
import Movie from "../movie/movie";
import "./movieList.css";
import { Types } from "./data";

const MovieList = () => {
  const types = Types;
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("classic");

  useEffect(() => {
    loadMovies();
  }, [type]);

  const loadMovies = async () => {
    const res = await fetch(`https://api.sampleapis.com/movies/${type}`);
    const data = await res.json();
    setMovies(data);
  };

  return (
    <>
      <h1>Movies List</h1>
      {types.map((t, i) => (
        <button
          key={i}
          onClick={() => {
            setType(t.name);
          }}
        >
          {t.name}
        </button>
      ))}

      <div className="movies d-flex flex-wrap justify-content-center">
        {movies.length &&
          movies.map((item, i) => <Movie key={i} movie={item}></Movie>)}
      </div>
    </>
  );
};

export default MovieList;
