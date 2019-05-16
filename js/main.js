import Tarjeta from "./tarjeta.js";
class Main{
    constructor(){
        let body = document.querySelector('#body');
        let actual = document.querySelector("#btn");
        let taller = document.querySelector("#taller");
        let tarjeta = new Tarjeta(actual,body,taller);
        // localStorage.clear()
        console.log(JSON.parse(localStorage.getItem('people')));
        document.querySelector("#btn").addEventListener('click', () => {
            tarjeta.crearFormularioRegistroDeTaller();
        });
    }
}
let m = new Main();