export const MovieItem = ({movie}) => (
    <li>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`} alt={`Poster do filme ${movie.title}`}/>
        <h1>{movie.title}</h1>
    </li>
);