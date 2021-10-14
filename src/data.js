//APi peliculas 
export let obtenerserie = (searchSerie)  => {
fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=373d6e23&s=${searchSerie}`)
.then((response)=> response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))
.finally(() => console.log("promesa resuelta"))
}

//exportar peliculas desde app.js