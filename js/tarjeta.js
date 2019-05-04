import Taller from "./taller.js"
export default class Tarjeta {
    constructor(actual, body, taller) {
        this._actual = actual;
        this._body = body;
        this._taller = taller;
        this._id = 0;
        this._idCard = 0;
        this.crearFormularioRegistroDeTaller();
        // console.log(this.colorRandom())
    }

    crearFormularioRegistroDeTaller() {

        let form = document.createElement('form');
        form.className = 'needs-validation formCreate';
        form.noValidate = true;
        let columnLeft = document.createElement('div');
        columnLeft.className = 'columnLeft';
        let columnRight = document.createElement('div');
        columnRight.className = 'columnRight';

        let closeWindow = document.createElement('i');
        closeWindow.className = 'fas fa-times close';
        closeWindow.addEventListener('click', () => {
            this._body.removeChild(divBlack);
        })


        // Primer FormGroup
        let formGroup1 = document.createElement('div');
        formGroup1.className = 'form-group';
        let label0 = document.createElement('label');
        label0.textContent = 'Name of the workshop:'
        label0.className = 'inputs';
        let inpt0 = document.createElement('input');
        inpt0.type = 'text';
        inpt0.className = 'form-control inputs';
        inpt0.placeholder = 'Escriba aquí';
        inpt0.id = 'name';
        inpt0.required = true;
        // Validaciones 1
        let divVal1 = document.createElement('div');
        divVal1.textContent = "Correcto";
        divVal1.className = 'valid-feedback';
        let divVal2 = document.createElement('div');
        divVal2.textContent = 'Please complete the field';
        divVal2.className = 'invalid-feedback';
        formGroup1.appendChild(label0);
        formGroup1.appendChild(inpt0);
        formGroup1.appendChild(divVal1);
        formGroup1.appendChild(divVal2);


        // -------------------------------------------------------------------------------
        // Segundo FormGroup
        let formGroup2 = document.createElement('div');
        formGroup2.className = 'form-group';
        let label1 = document.createElement('label');
        label1.textContent = 'Start date: '
        label1.className = 'inputs';
        let inpt1 = document.createElement('input');
        inpt1.type = 'date';
        inpt1.className = 'form-control inputs';
        inpt1.id = 'fechaInicio';
        inpt1.required = true;
        // Validaciones 2
        let divVal12 = document.createElement('div');
        divVal12.textContent = "Correcto";
        divVal12.className = 'valid-feedback';
        let divVal22 = document.createElement('div');
        divVal22.textContent = 'Please complete the field';
        divVal22.className = 'invalid-feedback';
        formGroup2.appendChild(label1);
        formGroup2.appendChild(inpt1);
        formGroup2.appendChild(divVal12);
        formGroup2.appendChild(divVal22);


        // -------------------------------------------------------------------------------
        // Tercer FormGroup
        let formGroup3 = document.createElement('div');
        formGroup3.className = 'form-group';
        let label2 = document.createElement('label');
        label2.textContent = 'End date: '
        label2.className = 'inputs';
        let inpt2 = document.createElement('input');
        inpt2.type = 'date';
        inpt2.className = 'form-control inputs';
        inpt2.id = 'fechaFin';
        inpt2.required = true;
        // Validaciones 3
        let divVal13 = document.createElement('div');
        divVal13.textContent = "Correcto";
        divVal13.className = 'valid-feedback';
        let divVal23 = document.createElement('div');
        divVal23.textContent = 'Please complete the field';
        divVal23.className = 'invalid-feedback';
        formGroup3.appendChild(label2);
        formGroup3.appendChild(inpt2);
        formGroup3.appendChild(divVal13);
        formGroup3.appendChild(divVal23);


        // -------------------------------------------------------------------------------
        // Cuarto FormGroup
        let formGroup4 = document.createElement('div');
        formGroup4.className = 'form-group';
        let label3 = document.createElement('label');
        label3.textContent = 'Number of hours: '
        label3.className = 'inputs';
        let inpt3 = document.createElement('input');
        inpt3.type = 'number';
        inpt3.className = 'form-control inputs';
        inpt3.id = 'horas';
        inpt3.required = true;
        // Validaciones 3
        let divVal14 = document.createElement('div');
        divVal14.textContent = "Correcto";
        divVal14.className = 'valid-feedback';
        let divVal24 = document.createElement('div');
        divVal24.textContent = 'Please complete the field';
        divVal24.className = 'invalid-feedback';
        formGroup4.appendChild(label3);
        formGroup4.appendChild(inpt3);
        formGroup4.appendChild(divVal14);
        formGroup4.appendChild(divVal24);

        // -------------------------------------------------------------------------------
        // Quinto FormGroup
        let formGroup5 = document.createElement('div');
        formGroup5.className = 'form-group';
        let label4 = document.createElement('label');
        label4.textContent = 'Number of places:'
        label4.className = 'inputs';
        let inpt4 = document.createElement('input');
        inpt4.type = 'number';
        inpt4.className = 'form-control inputs';
        inpt4.id = 'cupo';
        inpt4.required = true;
        // Validaciones 5
        let divVal15 = document.createElement('div');
        divVal15.textContent = "Correcto";
        divVal15.className = 'valid-feedback';
        let divVal25 = document.createElement('div');
        divVal25.textContent = 'Please complete the field';
        divVal25.className = 'invalid-feedback';
        formGroup5.appendChild(label4);
        formGroup5.appendChild(inpt4);
        formGroup5.appendChild(divVal15);
        formGroup5.appendChild(divVal25);

        // creacion de botones
        let btnSave = document.createElement('button');
        btnSave.type = 'button';
        btnSave.className = 'btn btn-success'
        btnSave.textContent = 'Add workshop';
        btnSave.style.marginLeft = '70px';
        btnSave.addEventListener('click', () => {

            if (form.checkValidity() === true) {

                let color = this.colorRandom();
                this._idCard = this.generateId();
                let name = inpt0.value;
                let dateStar = inpt1.value;
                let dateEnd = inpt2.value;
                let hour = inpt3.value;
                let places = inpt4.value;

                let addTaller = new Taller(color,this._idCard,name,dateStar,dateEnd,hour,places)

                this.createTarget(this._actual,color, name, this._idCard);
                this._body.removeChild(divBlack);
                console.log(form);



                Swal.fire({
                    title: 'Listo!',
                    text: 'Taller Agregado con éxito!',
                    type: 'success',
                    confirmButtonText: 'OK'
                })
            };
            form.classList.add('was-validated');
        });

        let btnCancel = document.createElement('button');
        btnCancel.type = 'button';
        btnCancel.className = 'btn btn-danger'
        btnCancel.textContent = 'Cancel';
        btnCancel.style.marginLeft = '30px';
        btnCancel.addEventListener('click', () => {
            this._body.removeChild(divBlack);
        });

        columnLeft.appendChild(formGroup1);
        columnLeft.appendChild(formGroup2);
        columnLeft.appendChild(formGroup3);
        form.appendChild(closeWindow);
        columnRight.appendChild(formGroup4);
        columnRight.appendChild(formGroup5);
        columnRight.appendChild(btnSave);
        columnRight.appendChild(btnCancel);
        form.appendChild(columnLeft);
        form.appendChild(columnRight);
        // form.appendChild(formGroup1);
        // form.appendChild(formGroup2);
        // form.appendChild(formGroup3);
        // form.appendChild(formGroup4);
        // form.appendChild(formGroup5);
        // form.appendChild(btnSave);
        // form.appendChild(btnCancel);

        let divBlack = document.createElement('div');
        divBlack.className = 'divBlack';
        divBlack.appendChild(form);
        this._body.appendChild(divBlack);
    }

    colorRandom() {
        let random = Math.round(Math.random() * 10);
        let color = 0;
        switch (random) {
            case 1:
                color = '#F30B0B';
                break;
            case 2:
                color = '#0105FE';
                break;
            case 3:
                color = '#018E08';
                break;
            case 4:
                color = '#FB6501';
                break;
            case 5:
                color = '#F3E200';
                break;
            case 6:
                color = '#FB01C9';
                break;
            case 7:
                color = '#8D3030';
                break;
            case 8:
                color = '#00CFFE';
                break;
            case 9:
                color = '#000000';
                break;
            case 10:
                color = '#761EE2';
                break;
            default:
                break;
        }

        return color;
    }

    createTarget(divActual,color, name, id) {
        
        let menuOptions = document.createElement('div');
        menuOptions.className = 'opcionesDeTarjeta';
        let div = document.createElement('div');
        div.style.height = '270px';
        div.style.transition = 'all .2s';
        div.className = 'estilosPost';
        div.style.background = '#355C7D';
        div.id = (id);


        var h3 = document.createElement('h3');
        h3.textContent = name;
        h3.className = 'encabezadoDeTarjeta';

        let hr = document.createElement('hr');
        hr.className = 'hr';
        hr.style.border = '2px solid'+ color +'';

        let dialogEdit = document.createElement('p');
        dialogEdit.className = 'dialogEdit rounded-pill';
        dialogEdit.textContent = 'Edit this workshop';
        dialogEdit.style.visibility = 'hidden';
        let btnEditTaller = document.createElement('i');
        btnEditTaller.className = 'far fa-edit edit';
        btnEditTaller.style.fontSize = '25px';
        btnEditTaller.addEventListener('mouseover',() => {
            dialogEdit.style.visibility = 'visible';
            dialogDelete.style.visibility = 'hidden';
            dialogAdd.style.visibility = 'hidden';
            window.setTimeout( () => {dialogEdit.style.visibility = 'hidden'},2000);
        });
        

        let dialogDelete = document.createElement('p');
        dialogDelete.className = 'dialogDelete rounded-pill';
        dialogDelete.textContent = 'Delete this workshop';
        dialogDelete.style.visibility = 'hidden';
        let btnDeleteTaller = document.createElement('i');
        btnDeleteTaller.className = 'fas fa-trash-alt del';
        btnDeleteTaller.style.fontSize = '25px';
        btnDeleteTaller.addEventListener('mouseover',() => {
            dialogDelete.style.visibility = 'visible';
            dialogEdit.style.visibility = 'hidden';
            dialogAdd.style.visibility = 'hidden';
            window.setTimeout( () => {dialogDelete.style.visibility = 'hidden'},2000);
        });
        
        let dialogAdd = document.createElement('p');
        dialogAdd.className = 'dialogAdd rounded-pill';
        dialogAdd.textContent = 'Add participant';
        dialogAdd.style.visibility = 'hidden';
        let btnAddStudent = document.createElement('i');
        btnAddStudent.className = 'fas fa-user-plus add';
        btnAddStudent.style.fontSize = '25px';
        btnAddStudent.addEventListener('mouseover',() => {
            dialogAdd.style.visibility = 'visible';
            dialogDelete.style.visibility = 'hidden';
            dialogEdit.style.visibility = 'hidden';
            window.setTimeout( () => {dialogAdd.style.visibility = 'hidden'},2000);
        });

        menuOptions.appendChild(btnEditTaller);
        menuOptions.appendChild(btnDeleteTaller)
        menuOptions.appendChild(btnAddStudent)
        div.appendChild(dialogDelete);
        div.appendChild(dialogEdit);
        div.appendChild(dialogAdd);
        div.appendChild(h3);
        div.appendChild(hr);
        div.appendChild(menuOptions);




        let actual = divActual;
        this._taller.insertBefore(div, actual);
    }

    generateId(){
        this._id = JSON.parse(localStorage.getItem('id'));
        this._id++;
        localStorage.setItem('id',this._id);
        return this._id;
    }
}

