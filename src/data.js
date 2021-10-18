
let renderSeries= (SeriesData) => { // Treamos la data del export
    console.log(SeriesData)
    // llamamos desde el id a el nombre de la serie desde HTML
    let serietitle = document.getElementById("serietitle")
    // llamamos desde un id a una imagen  desde HTML
    let serieImg = document.getElementById("serieimg")
    //llamamos dede un id a el poster
    let serieyear = document.getElementById("serieyear")
    // lamamas id de actores
    let seriesactors = document.getElementById("serieactors")
    // llamamos id de pais
    let seriepais = document.getElementById("seriepais")
    // llamamos id lenguaje
    let serielenguaje = document.getElementById("serielenguaje")
    serietitle.innerHTML = SeriesData.Title
    serieImg.setAttribute("src", SeriesData.Poster)
    serieyear.innerHTML= SeriesData.Year
    seriesactors.innerHTML = SeriesData.Actors
    seriepais.innerHTML = SeriesData.Country
    serielenguaje.innerHTML = SeriesData.Language

}



//APi peliculas 
export let obtenerserie = (searchSerie) => { //Definimos la funcion con una documentacion "searchserie"
    fetch( "https://www.omdbapi.com/?t='' + ''" + `${searchSerie}` + " &apikey=3067e0bb&t")  // fech es una promesa //$sintaxis que significa que no es un string, que es una variable
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