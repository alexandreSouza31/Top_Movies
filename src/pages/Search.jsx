import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_API_SEARCH;
const key = import.meta.env.VITE_API_KEY;

import "./Movies.css";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");//vou querer o param "q" da url, que é o filme que pesquisei

    const [popMovies, setPopMovies] = useState([]);

    const getSearchMovies = async (url,state) => {
        const res = await fetch(url);
        const data = await res.json();

        state(data.results);
    }

    const createSearchUrl = () => `${searchUrl}?${key}&query=${query}`;

    useEffect(() => {

        const popMoviesUrl = createSearchUrl()//aqui eu monto a url de acordo com a api
        getSearchMovies(popMoviesUrl,setPopMovies)

    }, [query])/*preciso do query no array de dependências pra ele executar a 
    função novamente toda vez que eu pesquisar um filme novo.*/

    const mapPop = popMovies.map((pop) => <MovieCard key={pop.id} movie={pop} />)

    return (
        <div className="home-container">
            <h4>
                Resultados para: <span className="result">{query}</span>
            </h4>
            {/* esse query é o parâmetro que vem da url*/}
            <div className="movies-card">
                {popMovies.length === 0 && <p>Carregando...</p>}
                {/* {popMovies.length > 0 &&
                    popMovies.map((pop) => <MovieCard key={pop.id} movie={pop} />)}*/}
                {mapPop} 

            </div>
        </div>
    )
}

export default Search