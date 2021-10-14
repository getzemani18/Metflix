import {obtenerserie} from "/data.js"

let searchSerie = () => {
    let searchValue = document.getElementById("input").value 
    console.log(searchValue)
    obtenerserie(searchValue)
}

let buttonSerie = document.getElementById('buttonbuscar')
buttonSerie.addEventListener('click', searchSerie)
obtenerserie()