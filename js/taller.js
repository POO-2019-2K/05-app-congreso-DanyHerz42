import Tarjeta from "./tarjeta.js";
export default class Taller {
    constructor(color, id, name, dateStart, dateEnd, hour, places) {
        this._color = color;
        this._id = id;
        this._name = name;
        this._dateStart = dateStart;
        this._dateEnd = dateEnd;
        this._hour = hour;
        this._places = places;
        this._vectorTalleres = [];
        this.saveOnLocalStorage();
    }


    saveOnLocalStorage() {
        let dateStartString = this.getDateOfString(this._dateStart);
        let dateEndString = this.getDateOfString(this._dateEnd);
        let taller = {
            color: this._color,
            id: this._id,
            name: this._name,
            dateStart: dateStartString,
            dateEnd: dateEndString,
            hours: this._hour,
            places: this._places
        }

        // console.log(this.getDateOfString(this._dateStart));
        
        
        this._vectorTalleres = JSON.parse(localStorage.getItem('talleres'));
        this._vectorTalleres.push(taller);
        localStorage.setItem('talleres', JSON.stringify(this._vectorTalleres));
        console.log(JSON.parse(localStorage.getItem('talleres')));
    }


    getDateOfString(date){
        let meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov", "Dic"];
        let sDate = date.split("-");
        let oDate = new Date(sDate[0], sDate[1] - 1, sDate[2]);
        let day = this.getNumberAs2Digits(oDate.getDate());
        let sDateD = day + "/" + meses[oDate.getMonth()] + "/" + oDate.getFullYear();
        return sDateD;
    }

    getNumberAs2Digits(number){
        if(number < 10) {
          return "0" + number
        }
    
        return  number;
    }
}