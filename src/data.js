
let renderSeries= (SeriesData) => { // Treamos la data del export
    console.log(SeriesData)
    // llamamos desde el id a el nombre de la serie desde HTML
    let serietitle = document.getElementById("serietitle")
    // llamamos desde un id a una imagen  desde HTML
    let serieImg = document.getElementById("serieimg")
    //llamamos dede un id a el poster
    let serieyear = document.getElementById("serieyear")
    serietitle.innerHTML = SeriesData.Title
    serieImg.setAttribute("src", SeriesData.Poster)
    serieyear.setAttribute("src", SeriesData.Year)

}



//APi peliculas 
export let obtenerserie = (searchSerie) => { //Definimos la funcion con una documentacion "searchserie"
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3067e0bb&s=${searchSerie}`)  // fech es una promesa //$sintaxis que significa que no es un string, que es una variable
    // Entonces... llamamos a los datos 
    .then((response) => {
        console.log(response)
    if(response.status === 404)    {
        alert("No encontrado")
    } else {
        response.json()
        .then ((data) => renderSeries(data))
        .catch((error) => console.log(error))
    }

    }) 
    .finally(() => console.log("Promesa Resuelta"))
    /*
   .then((response) => response.json())
   .then( (data) => renderSeries(data))
   .catch((error) => console.log(error))
   // Finalizamos la promesa
   .finally(() => console.log("promesa resuelta"))
   */
  }

//Fetch con el año