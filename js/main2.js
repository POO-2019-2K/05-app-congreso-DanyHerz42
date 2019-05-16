import Table from "./table.js";
class MainTables{
    constructor(){
        let div = document.querySelector("#taller");
        let t = new Table(div);
        t.generateTable();
    }
}
let m = new MainTables();