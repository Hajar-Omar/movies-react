import { useEffect, useState } from "react";
import Movie from "../movie/movie";
import "./movieList.css";
import { Types } from "./data";
import Pagination from "../../components/pagination/pagination";
import {TypeContext} from '../../shared/context'

const MovieList = () => {
  // readonly
  const types = Types;
  const itemsPerPage = 10;

  // states
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState(types[0].name);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // vars
  const end = currentPage * itemsPerPage; // all depending on states, so will be updating whenever state does change
  const start = end - itemsPerPage;
  const currentItems = filteredMovies.slice(start, end); // 3 layers of data (movies[data] > filteredMovies[data, search] > currentItems[data, search, pagination])

  // effects
  useEffect(() => {
    loadMovies();
  }, [type]);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
    );
    setCurrentPage(1); // Reset to first page on new search
  }, [movies, search]);

  // methods
  const loadMovies = async () => {
    await fetch(`https://api.sampleapis.com/movies/${type}`)
      .then((res) => res.json())
      .then((data) => {
        // const data = await res.json();
        setMovies(data);
        // setFilteredMovies(data.slice(0, itemsPerPage)); // movies.slice not working, state is async, not depending on each other
      });
  };

  const paginate = (num) => {
    setCurrentPage(num);
  };

  return (
    <>
    <TypeContext.Provider value={type}>
      {types.map((t, i) => (
        <button
          className={t.name === type ? "active" : ""}
          key={i}
          onClick={() => setType(t.name)}
        >
          {t.name}
        </button>
      ))}
      <div className="container">
        <input
          className="form-control form-control my-5"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />

        <div className="row mx-0 d-flex flex-wrap justify-content-center">
          {currentItems.length > 0 ? (
            currentItems.map((item, i) => <Movie key={i} movie={item}></Movie>)
          ) : (
            <p>No data found</p>
          )}
        </div>

        <Pagination
          total={filteredMovies.length}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      </TypeContext.Provider>
    </>
  );
};

export default MovieList;
