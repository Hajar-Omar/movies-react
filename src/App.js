import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/movieList/movieList";
import Details from "./pages/details/details";
import Layout from "./pages/layout/layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Games from "./pages/games/Games";
import Coding from "./pages/coding/Coding";
import Jokes from "./pages/jokes/Jokes";
import Prefrences from "./pages/prefrences/Prefrences";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="movies" element={<MovieList />}></Route>
              <Route path="details/:type/:id" element={<Details />}></Route>
              <Route path="jokes" element={<Jokes />}></Route>
              <Route path="coding" element={<Coding />}></Route>
              <Route path="prefrences" element={<Prefrences />}></Route>
              <Route path="games" element={<Games />}></Route>
              <Route path="*" element={<h1>404 Not Found</h1>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
