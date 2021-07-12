import { Link } from "react-router-dom";

export const MovieItem = ({ title, id, poster }) => (
    <li>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster}`} alt={`Poster do filme ${title}`}/>
        <Link to={`movie/${id}`}>{title}</Link>
    </li>
);