
import {obtenerserie} from "./data.js" // importamos el data.js

let buscarserie = () => { // Hacemos una funcion  para traer el id
    let searchValue = document.getElementById("input").value // traemos el id del HTML,
    console.log(searchValue) //checamos si sale la funcion
    obtenerserie(searchValue)
}

let buttonSerie= document.getElementById('buttonbuscar') // nos traemos el botonbuscar 
buttonSerie.addEventListener('click', buscarserie) // para que al dar click busque lo que buscas

