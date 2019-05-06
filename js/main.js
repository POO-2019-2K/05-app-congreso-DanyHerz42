import Tarjeta from "./tarjeta.js";
import Taller from "./taller.js";
class Main{
    constructor(){
        // let body1 = document.getElementById('2').id;
        // console.log(body1);
        let body = document.querySelector('#body');
        let actual = document.querySelector("#btn");
        let taller = document.querySelector("#taller");
        let tarjeta = new Tarjeta(actual,body,taller);
        // localStorage.removeItem('id');
        localStorage.removeItem('taleres');
        // console.log(JSON.parse(localStorage.getItem('id')));
        document.querySelector("#btn").addEventListener('click', () => {
            tarjeta.crearFormularioRegistroDeTaller();
        });
    }
}
let m = new Main();