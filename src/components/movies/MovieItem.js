import { Link } from "react-router-dom";
import { MovieItemStyled } from "../../styles/movies/MovieItemStyled";

export const MovieItem = ({ title, id, poster }) => (
    <MovieItemStyled>
        <li>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster}`} alt={`Poster do filme ${title}`}/>
        <Link to={`movie/${id}`} className="movieLink">{title}</Link>
    </li>
    </MovieItemStyled>
);