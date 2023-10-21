// MiApi.js
import  { useEffect } from "react";
import axios from "axios";

const MiApi = ({ setMovie, setMovieBackup }) => {
  useEffect(() => {
    const searchFilm = async () => {
      const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=e20e6e7399ebaa40d383bc4b50d2d3ad";

      try {
        const response = await axios.get(apiUrl);
        const data = response.data.results;
        setMovie(data);
        setMovieBackup(data);
      } catch (err) {
        console.log("Error al obtener datos de la API:", err);
      }
    };

    searchFilm();
  }, [setMovie, setMovieBackup]);

  return null;
};

export default MiApi;
