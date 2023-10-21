import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./components/card";
import Buscador from "./components/buscador";
import NavBar from "./components/navbar";
import Filter from "./components/filtro";
import MiApi from "./components/Miapi"; 

const App = () => {
  const [movie, setMovie] = useState([]);
  const [movieBackup, setMovieBackup] = useState([]);

  const buscarPelicula = (palabra) => {
    if (palabra !== "") {
      const results = movieBackup;
      const searchResult = results.filter((movi) =>
        movi.original_title.toLowerCase().includes(palabra.toLowerCase())
      );
      setMovie(searchResult);
    } else {
      setMovie(movieBackup);
    }
  };

  return (
    <div>
      <div>
        <NavBar />
        <h2>Catálogo</h2>
        <div className="buscador">
          <Buscador buscarPelicula={buscarPelicula} />
          <Filter movie={movie} setMovie={setMovie} />
        </div>
      </div>
      <div className="section_card">
        {movie ? (
          movie.map((data) => (
            <MyCard
              key={data.id}
              img={data.poster_path}
              description={data.overview}
              title={data.original_title}
              id={data.id}
              nota={data.vote_average}
            />
          ))
        ) : (
          <h1>Not found</h1>
        )}
      </div>
      <MiApi setMovie={setMovie} setMovieBackup={setMovieBackup} />
    </div>
  );
};

export default App;