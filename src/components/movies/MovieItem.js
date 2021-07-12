import { Link } from "react-router-dom";

export const MovieItem = ({ title, id, backdrop_path }) => (
    <li>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${backdrop_path}`} alt={`Poster do filme ${title}`}/>
        <Link to={`movie/${id}`}>{title}</Link>
    </li>
);