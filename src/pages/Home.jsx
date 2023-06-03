import { useEffect, useState } from "react";


const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [popMovies, setPopMovies] = useState([])
    //const [topMovies, setTopMovies] = useState([])

    const getMovies = async (url,state) => {//o state é passado como parâmetro pra conseguir usar mais de um
        const res = await fetch(url)
        const data = await res.json()
        
        state(data.results)
    }

    const createUrl = (category) => `${ url}${category}${key}`

    useEffect(() => {/*tenho possibilidade de executar uma função em alguns 
    estágios da minha aplicação(baseado no array de dependências no final da função '[]')*/

        const popMoviesUrl =createUrl('popular?')//aqui eu monto a url de acordo com a api
        //const topMoviesUrl =createUrl('top_rated?')//aqui eu monto a url de acordo com a api
        getMovies(popMoviesUrl,setPopMovies)
        //getMovies(topMoviesUrl,setTopMovies)

    }, [])//array vazio: será executado somente quando a pág for carregada

    const mapPop = popMovies.length > 0 &&popMovies.map((pop) => <p>"populares"{pop.title}</p>)
    //const mapTop = topMovies.length > 0 && topMovies.map((top) => <p>{top.title}</p>)
    
    return (
        <div className="container">
            
            <div className="movies_container">
                {popMovies.length === 0 && <p>Carregando...</p>}
                {mapPop}
                
            </div>
        </div>
    )
}

export default Home