import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovies from "../hooks/getMovies"

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import "./Movie.css";
import formatCurrency from "../hooks/formatCurrency";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const Movie = () => {

    const { id } = useParams()//vai pegar o id que está na url desestruturando e usando hook.
    const [movie, setMovie] = useState(null);

    //const createUrl = `${url}${id}?${key}`;
    const createUrlPt = `${url}${id}?${key}&language=pt-BR `;

    useEffect(() => {
        getMovies(createUrlPt, setMovie, false)
    }, [])

    return (
        <div className="movie-page" >
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>

                    <div className="info">
                        <h3><BsWallet2 />Orçamento:</h3>
                    </div>
                    <p>{formatCurrency(movie.budget,"en-US","USD")}</p>

                    <div className="info">
                        <h3><BsGraphUp />Receita:</h3>
                    </div>
                    <p>{formatCurrency(movie.revenue,"en-US","USD")}</p>

                    <div className="info">
                        <h3><BsHourglassSplit />Duração:</h3>
                    </div>
                    <p>{movie.runtime} minutos</p>

                    <div className="info description">
                        <h3><BsFillFileEarmarkTextFill />Descrição:</h3>
                    </div>
                    <p>{movie.overview}</p>
                </>
            )}
        </div>
    )
}

export default Movie