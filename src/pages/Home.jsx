import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import getMovies from "../hooks/getMovies";
import Loading from "../components/Loading";

import "./Movies.css"

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [popMovies, setPopMovies] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    const createUrl = (category) => `${url}${category}${key}&language=pt-BR`;

    useEffect(() => {/*tenho possibilidade de executar uma função em alguns 
    estágios da minha aplicação(baseado no array de dependências no final da função '[]')*/

        const popMoviesUrl = createUrl('popular?')//aqui eu monto a url de acordo com a api
        
        setTimeout(() => {
            getMovies(popMoviesUrl, setPopMovies, true)
            setRemoveLoading(true)
        }, 3000);

    }, [])//array vazio: será executado somente quando a pág for carregada

    const mapPop = popMovies.length > 0 && popMovies.map((pop) => <MovieCard key={pop.id} movie={pop} />)

    return (
        <div className="home-container">
            <h4>Mais Polulares</h4>
            <div className="movies-card">
                {popMovies.length === 0 && !removeLoading && <Loading />}
                {mapPop}

            </div>
        </div>
    )
}

export default Home