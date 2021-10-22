
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
    //lamamos id genero
    let seriegenero =document.getElementById("seriegenero")
    //lamamos id genero
    let serietrama =document.getElementById("serietrama")
    //lamamos id genero
    let serietime =document.getElementById("serietime")
    serietitle.innerHTML = SeriesData.Title
    serieImg.setAttribute("src", SeriesData.Poster)
    serieyear.innerHTML= SeriesData.Year
    seriesactors.innerHTML = SeriesData.Actors
    seriepais.innerHTML = SeriesData.Country
    serielenguaje.innerHTML = SeriesData.Language
    seriegenero.innerHTML = SeriesData.Genre
    serietrama.innerHTML = SeriesData.Plot
    serietime.innerHTML =  SeriesData.Runtime

}



// Aparexca una recomendada por id en Buscar 
/*
let serieRecomendada = ['tt10919420']
for (const serieID of serieRecomendada) {
    console.log(serieID)
    fetch("https://www.omdbapi.com/?i=tt10919420&apikey=3067e0bb&t")
    .then((response) => response.json() )
    .then((data) => renderingSerieRecomendada(data))
    .catch((error) => console.log(error))  
}

let renderingSerieRecomendada = (data) => {
    console.log(data)
    let SerieSelecction = document.getElementById('popular')
   SerieSelecction.innerHTML += '<img src=' + `${data.Poster}` + ' /> ' + "<br>" + "<h1>Titulo: " + `${data.Title}`+ "</h1>" + "<h1>Año: " + `${data.Year}`+ "</h1>" + "<h3>Duración: " + `${data.Runtime}`+ "</h3>" + "<h3>Género: " + `${data.Genre}` + "</h3>" + "<h3>Actores: " + `${data.Actors}`+ "</h3>" + "<h3>Director: " + `${data.Director}` + "</h3>" +"<br>" +"<p>Resumen: " + `${data.Plot}`+ "</p>"//template string JS 

}
*/
//APi peliculas 
export let obtenerserie = (searchSerie) => { //Definimos la funcion con una documentacion "searchserie"
    fetch( "https://www.omdbapi.com/?t=" + `${searchSerie}` + " &apikey=3067e0bb&t")  // fech es una promesa //$sintaxis que significa que no es un string, que es una variable
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

//Series seleccionadas


let seriesQueHay = ["tt11058644", "tt11612120", "tt6611916", "tt10919420", "tt12867810", "tt12451520", "tt9145880", "tt8995604", "tt10262630", "tt10220588", "tt10055734", "tt13433812", "tt7298976"]


let seriesTrae = (seriesQueHay) => {

    for (const serie of seriesQueHay) {
        fetch("https://www.omdbapi.com/?i=" + `${serie}` + "&apikey=3067e0bb&t")
        .then((response) => response.json())
        .then((data) => pintarSeries(data))
        .catch((error) => console.log(error))  
    }  
}

seriesTrae(seriesQueHay)


 let pintarSeries = (data) => {
    console.log(data)
    let seleccion = document.getElementById("selecionSeries")
    seleccion.innerHTML += 
    "<div class='card text-red bg-dark mb-3' style='max-width: 1500px;>"
    + "<div class='row g-0'>"
    + "<div class='col-md-4'>"
    + "<img src=" + `${data.Poster}` +  "class='rounded-start' alt=''>"
    + "</div>"
    + "<br>"
    + "<div class='col-md-8'>"
    + "<div class='card-body'>"
    + "<div class='card-img-overlay'>"
    + "<h5 class='card-title'>"+ `${data.Title}`+"</h5>"
    + "<p class='card-text'>" + `${data.Plot}` + "</p>"
    + "<p class='actors' >" + `${data.Actors}` + "</p>"
    + "<p class='card-time'>"+ `${data.Runtime}`+ "</p>"   
    + "</div>"
    + "</div>"
    + "</div>"
    + "</div>"
    

   

}



{/* "<img src=" + data.Poster + ">" */}