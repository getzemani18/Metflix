//trernos esde el data.js la key
import {obtenerserie} from "./data.js" // importamos el data.js

//Busca la serie
let buscarserie = () => { // Hacemos una funcion  para traer el id
    let searchValue = document.getElementById("input").value // traemos el id del HTML,
    console.log(searchValue) //checamos si sale la funcion
    obtenerserie(searchValue)
}

// Boton para empezar
let buttonSerie= document.getElementById('buttonbuscar') // nos traemos el botonbuscar 
buttonSerie.addEventListener('click', buscarserie) // para que al dar click busque lo que buscas

//Ocultar Pantalla
document.getElementById("pantalla2").hidden = true;


//Muestro las condiciones para dejar que el usuario ingrese
let inicio = document.getElementById("iniciar")
iniciar.addEventListener("click", () => {
let user = document.getElementById("email").value
let contraseña = document.getElementById("contraseña").value
if(user == "MetName" && contraseña ==123) {
    document.getElementById("pantalla1").hidden = true
    document.getElementById("pantalla2").hidden = false
}else {
    alert("Correo y contraseña invalidos")
}
})