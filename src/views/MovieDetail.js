import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";
import { MoviesContainer } from "../styles/movies/MoviesContainer";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MoviesService.getDetailsById(id);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <MoviesContainer>
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
        alt={`Poster do filme ${movie.title}`}
      />
      <h1>{movie.title}</h1>
      <article>{movie.overview}</article>
    </MoviesContainer>
  );
};
