import { Link } from "react-router-dom";

import "../pages/Movies.css"

const imageUrl = import.meta.env.VITE_API_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div>
            <div className="img-container">
                <Link to={`/movie/${movie.id}`}>
                    <img src={imageUrl + movie.poster_path} alt={movie.title} />
                </Link>
            </div>
            <div className="details">
                <h3>{movie.title}</h3>
                {showLink &&
                    <Link to={`/movie/${movie.id}`}>{/*mesmo estilo da url do main.jsx*/}
                        Detalhes
                    </Link>}
            </div>

        </div>
    )
}

export default MovieCard