import './App.css';
import { Header } from './components/header/Header';
import { MoviesList } from './components/movies/MoviesList';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <MoviesList movies={[]} />
      </section>
    </div>
  );
}

export default App;
