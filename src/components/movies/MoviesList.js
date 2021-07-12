import {MovieItemStyled } from '../../styles/movies/MovieItemStyled';
import {MovieItem} from './MovieItem'

export const MoviesList = ({movies}) => (
    <section>
        <MovieItemStyled>
           {movies.map(m => <MovieItem movie={m} />)}
        </MovieItemStyled>
    </section>
);