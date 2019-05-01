import Taller from "./talleres.js";
class Main{
    constructor(){
        let actual = document.querySelector("#btn");
        document.querySelector("#btn").addEventListener('click', () => {
            let t = new Taller(actual);
        });
    }
}
let m = new Main();