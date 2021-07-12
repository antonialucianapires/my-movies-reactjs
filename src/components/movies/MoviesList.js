import {MovieItemStyled } from '../../styles/movies/MovieItemStyled';
import {MovieItem} from './MovieItem'

export const MoviesList = ({movies}) => (
    <section>
        <MovieItemStyled>
            {movies.map(m => <MovieItem id={m.id} title={m.title} poster={m.poster_path} />)}
        </MovieItemStyled>
    </section>
);