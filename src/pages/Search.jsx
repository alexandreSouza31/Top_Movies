import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getMovies from "../hooks/getMovies";

import MovieCard from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_API_SEARCH;
const key = import.meta.env.VITE_API_KEY;

import "./Movies.css";
import Loading from "../components/Loading";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");//vou querer o param "q" da url, que é o filme que pesquisei

    const [popMovies, setPopMovies] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    const createSearchUrl = () => `${searchUrl}?${key}&query=${query}&language=pt-BR`;

    useEffect(() => {

        const popMoviesUrl = createSearchUrl()//aqui eu monto a url de acordo com a api
        
        setTimeout(() => {
            getMovies(popMoviesUrl, setPopMovies, true)
            setRemoveLoading(true)
        }, 3000);

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
            {/* {popMovies.length === 0 && !removeLoading &&<Loading /> && <p>sua busca não gerou resultados!</p>} */}
                {popMovies.length === 0 && !removeLoading && <Loading />}
                
                {mapPop} 

            </div>
        </div>
    )
}

export default Search