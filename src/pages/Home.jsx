import { useEffect, useState } from "react";


const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [popMovies, setPopMovies] = useState([])

    const getPopMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data)
        setPopMovies(data.results);
    }

    useEffect(() => {/*tenho possibilidade de executar uma função em alguns 
    estágios da minha aplicação(baseado no array de dependências no final da função '[]')*/

        const popMoviesUrl = `${url}popular?${key}`//aqui eu monto a url
        getPopMovies(popMoviesUrl)

    }, [])//array vazio: será executado somente quando a pág for carregada 

    return (
        <div className="container">
            <h2 className="title">Filmes mais populares: </h2>
            <div className="movies_container">
                {popMovies.length===0 && <p>Carregando...</p>}
                {popMovies.length > 0 && popMovies.map((movie) => <p>{movie.title}</p>)}
            </div>
        </div>
    )
}

export default Home