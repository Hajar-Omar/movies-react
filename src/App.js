import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./Components/movieList/movieList";
import Details from "./Components/details/details";
import Layout from "./Components/layout/layout";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MovieList />}></Route>
              <Route path="movies" element={<MovieList />}></Route>
              <Route path="details/:type/:id" element={<Details />}></Route>
              <Route path="*" element={<h1>404 Not Found</h1>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
