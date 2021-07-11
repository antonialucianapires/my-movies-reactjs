import './App.css';
import { Header } from './components/header/Header';
import { MoviesList } from './components/movies/MoviesList';
import { MoviesContainer } from './components/styles/movies/MoviesContainer'

function App() {
  return (
    <div className="App">
      <Header/>
      <MoviesContainer>
        <MoviesList movies={[]} />
      </MoviesContainer>
    </div>
  );
}

export default App;
