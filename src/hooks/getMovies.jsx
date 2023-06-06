    const getMovies =async (url,state,results=false) => {//o state é passado como parâmetro pra conseguir usar mais de um
        const res = await fetch(url)
        const data = await res.json()
        
        !results?state(data):state(data.results)
     /* A página que é mostrada após clicar em detalhes não
      tem "data.results", como exite na home e na search, por
      exemplo, mas sim somente "data". Então criei essa função, e 
      quando ela é chamada em determinada página passo o
      booleano como argumento. Se tem resultado, true, senão, false. */
    }
   
export default getMovies