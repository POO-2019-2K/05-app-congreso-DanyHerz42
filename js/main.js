import Tarjeta from "./tarjeta.js";
class Main{
    constructor(){
        // let body1 = document.getElementById('2').id;
        // console.log(body1);
        let body = document.querySelector('#body');
        let actual = document.querySelector("#btn");
        let taller = document.querySelector("#taller");
        document.querySelector("#btn").addEventListener('click', () => {
            let t = new Tarjeta(actual,body,taller);
        });
    }
}
let m = new Main();