import { Link } from "react-router-dom";

import "../pages/Movies.css"

const imageUrl = import.meta.env.VITE_API_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="container">
            <div className="img-container">
                    <img src={imageUrl + movie.poster_path} alt={movie.title} />
            </div>
            <h3>{movie.title}</h3>
            <div className="link-movie">
            {showLink &&
                <Link to={`/movie/${movie.id}`}>{/*mesmo estilo da url do main.jsx*/}
                    Detalhes
                    </Link>}
            </div>
        </div>
    )
}

export default MovieCard