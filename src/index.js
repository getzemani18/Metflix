//Ocultar Pantalla
document.getElementById("pantalla2").hidden = true;
document.getElementById("pantalla3").hidden = true;

//Muestro las condiciones para dejar que el usuario ingrese

let empezar = document.getElementById("iniciar")
console.log(empezar,"empieza")
iniciar.addEventListener("click", () => {
let user = document.getElementById("username").value
let contraseña = document.getElementById("contraseña").value
console.log(user)
if(user == "MetName" && contraseña ==123) {
    document.getElementById("header").hidden = true
    document.getElementById("pantalla1").hidden = true
    document.getElementById("pantalla2").hidden = false
}else {
    alert("Correo y contraseña invalidos")
}
})

//--------------------PANTALLA 2----------------//


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



