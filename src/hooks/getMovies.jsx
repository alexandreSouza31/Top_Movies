


    const getMovies =async (url,state) => {//o state é passado como parâmetro pra conseguir usar mais de um
        const res = await fetch(url)
        const data = await res.json()
        
        state(data.results)
    }
   


export default getMovies