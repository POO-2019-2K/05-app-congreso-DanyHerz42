export default class Table{
    constructor(div){
        this._div = div;
        this._talleres = [];
    }

    generateTable(){
        let table = document.createElement('table');
        table.className = "table";
        table.style.textAlign = "center";

        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let trEnc1 = document.createElement('th');
        trEnc1.textContent = "Name";
        let trEnc2 = document.createElement('th');
        trEnc2.textContent = "Date Start";
        let trEnc3 = document.createElement('th');
        trEnc3.textContent = "Date End";
        let trEnc4 = document.createElement('th');
        trEnc4.textContent = "Places";
        let trEnc5 = document.createElement('th');
        trEnc5.textContent = "Hours";

        this._talleres = JSON.parse(localStorage.getItem("talleres"));
        this._talleres.forEach((e,index) =>{
            let nTr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.textContent = e.name;
            let td2 = document.createElement("td");
            td2.textContent = e.dateStart;
            let td3 = document.createElement("td");
            td3.textContent = e.dateEnd;
            let td4 = document.createElement("td");
            td4.textContent = e.places;
            let td5 = document.createElement("td");
            td5.textContent = e.hours;

            nTr.appendChild(td1);
            nTr.appendChild(td2);
            nTr.appendChild(td3);
            nTr.appendChild(td4);
            nTr.appendChild(td5);

            table.appendChild(nTr);
        })

        tr.appendChild(trEnc1);
        tr.appendChild(trEnc2);
        tr.appendChild(trEnc3);
        tr.appendChild(trEnc4);
        tr.appendChild(trEnc5);
        thead.appendChild(tr);
        table.appendChild(thead);
        this._div.appendChild(table);
        
    }
}