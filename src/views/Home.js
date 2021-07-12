import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MoviesList } from "../components/movies/MoviesList";
import { MoviesContainer } from "../styles/movies/MoviesContainer";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
};
