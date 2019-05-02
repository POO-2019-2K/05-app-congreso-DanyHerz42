export default class Tarjeta {
    constructor(actual,body,taller) {
        this._actual = actual;
        this._body = body;
        this._taller = taller;
        this.crearFormularioRegistroDeTaller();
        // console.log(this.colorRandom())
    }

    crearFormularioRegistroDeTaller() {
        let form = document.createElement('form');
        form.className = 'formCreate needs-validation';
        form.noValidate = true;

        // Primer FormGroup
        let formGroup1 = document.createElement('div');
        formGroup1.className = 'form-group';
        let label0 = document.createElement('label');
        label0.textContent = 'Nombre del taller:'
        label0.className = 'inputs';
        let inpt0 = document.createElement('input');
        inpt0.type = 'text';
        inpt0.className = 'form-control inputs';
        inpt0.placeholder = 'Escriba aquí';
        inpt0.id = 'name';
        formGroup1.appendChild(label0);
        formGroup1.appendChild(inpt0);

        // Segundo FormGroup
        let formGroup2 = document.createElement('div');
        formGroup2.className = 'form-group';
        let label1 = document.createElement('label');
        label1.textContent = 'Fecha de Inicio:'
        label1.className = 'inputs';
        let inpt1 = document.createElement('input');
        inpt1.type = 'date';
        inpt1.className = 'form-control inputs';
        inpt1.id = 'fechaInicio';
        formGroup2.appendChild(label1);
        formGroup2.appendChild(inpt1);

        // Tercer FormGroup
        let formGroup3 = document.createElement('div');
        formGroup3.className = 'form-group';
        let label2 = document.createElement('label');
        label2.textContent = 'Fecha de fin:'
        label2.className = 'inputs';
        let inpt2 = document.createElement('input');
        inpt2.type = 'date';
        inpt2.className = 'form-control inputs';
        inpt2.id = 'fechaFin';
        formGroup3.appendChild(label2);
        formGroup3.appendChild(inpt2);
        
        // Cuarto FormGroup
        let formGroup4 = document.createElement('div');
        formGroup4.className = 'form-group';
        let label3 = document.createElement('label');
        label3.textContent = 'Numero de Horas:'
        label3.className = 'inputs';
        let inpt3 = document.createElement('input');
        inpt3.type = 'number';
        inpt3.className = 'form-control inputs';
        inpt3.id = 'horas';
        formGroup4.appendChild(label3);
        formGroup4.appendChild(inpt3);

        // Quinto FormGroup
        let formGroup5 = document.createElement('div');
        formGroup5.className = 'form-group';
        let label4 = document.createElement('label');
        label4.textContent = 'Cupo:'
        label4.className = 'inputs';
        let inpt4 = document.createElement('input');
        inpt4.type = 'number';
        inpt4.className = 'form-control inputs';
        inpt4.id = 'cupo';
        formGroup5.appendChild(label4);
        formGroup5.appendChild(inpt4);

        // creacion de botones
        let btnSave = document.createElement('button');
        btnSave.type = 'button';
        btnSave.className = 'btn btn-success'
        btnSave.textContent = 'Guardar';
        btnSave.style.marginLeft ='10px';
        btnSave.addEventListener('click', () => {
            let name = inpt0.value;
            this.createTarget(this._actual,name);
            this._body.removeChild(divBlack);
        });

        let btnCancel = document.createElement('button');
        btnCancel.type = 'button';
        btnCancel.className = 'btn btn-danger'
        btnCancel.textContent = 'Cancelar';
        btnCancel.style.marginLeft ='10px';
        btnCancel.addEventListener('click', () => {
            this._body.removeChild(divBlack);
        });


        form.appendChild(formGroup1);
        form.appendChild(formGroup2);
        form.appendChild(formGroup3);
        form.appendChild(formGroup4);
        form.appendChild(formGroup5);
        form.appendChild(btnSave);
        form.appendChild(btnCancel);

        let divBlack = document.createElement('div');
        divBlack.className = 'divBlack';
        divBlack.appendChild(form);
        this._body.appendChild(divBlack);     
    }

    colorRandom() {
        let m = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ","+ Math.random() + parseInt(.50) +")";
        return m;
    }

    createTarget(divActual,name) {
        let menu = document.createElement('i');
        menu.className = 'fas fa-ellipsis-v';
        menu.style.position = 'absolute';
        menu.style.marginTop = '10px';
        menu.style.marginLeft ='250px';
        menu.style.fontSize = '2em';
        menu.style.color = 'black';
        let div = document.createElement('div');
        div.style.height = '170px';
        div.style.transition = 'all .5s';
        div.className = 'estilosPost';
        div.style.background = this.colorRandom();

        
        var h2 = document.createElement('h2');
        h2.textContent = name;
        
        let div2 = document.createElement('div');
        div2.className = 'nombreTaller';

        div2.appendChild(h2);
        div.appendChild(menu);
        div.appendChild(div2);
        
        
        let actual = divActual;
        this._taller.insertBefore(div, actual);
    }
}

