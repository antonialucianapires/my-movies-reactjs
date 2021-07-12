import { useEffect, useState } from 'react';
import './App.css';
import { MoviesService } from './components/api/MoviesService';
import { Header } from './components/header/Header';
import { MoviesList } from './components/movies/MoviesList';
import { MoviesContainer } from './components/styles/movies/MoviesContainer'

function App() {

  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
    console.log(data);
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className="App">
      <Header/>
      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
