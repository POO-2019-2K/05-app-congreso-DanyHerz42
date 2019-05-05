import Tarjeta from "./tarjeta.js";
export default class Taller{
    constructor(color,id,name,dateStart,dateEnd,hour,places){
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


    saveOnLocalStorage(){
        
        let taller = {
            color: this._color,
            id: this._id,
            name: this._name,
            dateStart: this._dateStart,
            dateEnd: this._dateEnd,
            hours: this._hour,
            places: this._places
        }

        this._vectorTalleres = JSON.parse(localStorage.getItem('talleres'));
        this._vectorTalleres.push(taller);
        localStorage.setItem('talleres',JSON.stringify(this._vectorTalleres));
        console.log(JSON.parse(localStorage.getItem('talleres')));
    }
}