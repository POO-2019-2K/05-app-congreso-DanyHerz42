import Taller from "./taller.js"
export default class Tarjeta {
    constructor(actual, body, taller) {
        this._actual = actual;
        this._body = body;
        this._taller = taller;
        this._id = 0;
        this._idCard = 0;
        this.initCards();
        this._talleres = [];
        this._participant = new Array();
    }

    initCards() {
        if (localStorage.getItem('talleres') === null) {
            return;
        } else {

            this._talleres = JSON.parse(localStorage.getItem('talleres'));
            this._talleres.forEach((e, index) => {
                this.createTarget(this._actual, e.color, e.id, e.name, e.dateStart, e.dateEnd, e.hours, e.places);
            });
        }
    }

    findParticipantes(id) {
        let i = 0;
        this._participant = JSON.parse(localStorage.getItem('people'))
        this._participant.forEach((e, index) => {
            if (e.id === id) {
                i++;
            }
        });
        return i;
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

                let addTaller = new Taller(color, this._idCard, name, dateStar, dateEnd, hour, places)

                let sDateStart = addTaller.getDateOfString(dateStar);
                let sDateEnd = addTaller.getDateOfString(dateEnd);
                this.createTarget(this._actual, color, this._idCard, name, sDateStart, sDateEnd, hour, places);
                this._body.removeChild(divBlack);

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

    createTarget(divActual, color, id, name, oDateStart, oDateEnd, hour, places) {
        let menuOptions = document.createElement('div');
        menuOptions.className = 'opcionesDeTarjeta';
        let div = document.createElement('div');
        div.style.height = '270px';
        div.style.transition = 'all .2s';
        div.className = 'estilosPost';
        div.style.background = '#355C7D';
        div.id = id;

        var h3 = document.createElement('h3');
        h3.textContent = name;
        h3.className = 'encabezadoDeTarjeta';

        let placesd = document.createElement('p');
        placesd.textContent = places + " Places available";
        placesd.style.color = "white";
        placesd.style.fontSize = "20px";
        placesd.style.marginTop = "40px";
        placesd.style.textAlign = "center";

        let hoursd = document.createElement('p');
        hoursd.textContent = hour + " Total hours";
        hoursd.style.color = "white";
        hoursd.style.fontSize = "20px";
        hoursd.style.marginTop = "0px";
        hoursd.style.textAlign = "center";

        let divDate = document.createElement('div');
        divDate.className = 'divDate';

        let divDay1 = document.createElement('div');
        divDay1.className = 'divDay1';
        let aDateStart = oDateStart.split("/");
        divDay1.textContent = aDateStart[0] + " " + oDateStart[3] + oDateStart[4] + oDateStart[5];

        let guion = document.createElement('div');
        guion.textContent = "|";
        guion.style.lineHeight = "45px";
        guion.style.fontSize = "60px";
        guion.style.paddingLeft = "5px;";
        guion.style.paddingRight = "5px;";

        let divDay2 = document.createElement('div');
        divDay2.className = 'divDay2';
        let aDateEnd = oDateEnd.split("/");
        divDay2.textContent = aDateEnd[0] + " " + oDateEnd[3] + oDateEnd[4] + oDateEnd[5];

        divDate.appendChild(divDay1);
        divDate.appendChild(guion);
        divDate.appendChild(divDay2);

        let hr = document.createElement('hr');
        hr.className = 'hr';
        hr.style.border = '2px solid' + color + '';

        let messEditWor = document.createElement('span');
        messEditWor.className = 'hint--top hint--success edit';
        messEditWor.setAttribute('aria-label', 'Edit this workshop');
        let btnEditTaller = document.createElement('i');
        btnEditTaller.className = 'far fa-edit';
        btnEditTaller.style.fontSize = '25px';
        btnEditTaller.id = id;
        btnEditTaller.addEventListener('click', () => {
            let modificacion = id;
            this.crearFormularioDeEdicion(modificacion);
        });

        let messDelWor = document.createElement('span');
        messDelWor.className = 'hint--top hint--success del';
        messDelWor.setAttribute('aria-label', 'Delete this workshop');
        let btnDeleteTaller = document.createElement('i');
        btnDeleteTaller.className = 'fas fa-trash-alt ';
        btnDeleteTaller.style.fontSize = '25px';
        btnDeleteTaller.id = id;
        btnDeleteTaller.addEventListener('click', () => {
            this._talleres = JSON.parse(localStorage.getItem('talleres'));
            let tModification = id;
            this._talleres.forEach((e, index) => {
                if (e.id === tModification) {
                    Swal.fire({
                        title: 'Are you sure to delete this workshop?',
                        text: "You won't be able to revert this!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.value) {
                            let contador = 0;
                            this._participant = JSON.parse(localStorage.getItem('people'));
                            this._participant.forEach((u,indice) => {
                                if(e.id === u.idTaller){
                                    contador++;
                                }
                            })
                            if(contador !== 0){
                                Swal.fire(
                                    'Atention!',
                                    'This workshop still has registered participants.',
                                    'warning'
                                )
                            }else{
                                this._taller.removeChild(document.getElementById(e.id));
                                this._talleres.splice(this._talleres.indexOf(e), 1);
                                console.log(this._talleres);
                                localStorage.setItem('talleres', JSON.stringify(this._talleres));
                                Swal.fire(
                                    'Deleted!',
                                    'This workshop has been deleted!',
                                    'success'
                                )
                            }
                        }
                    });
                }
            });
        });

        let messAddStu = document.createElement('span');
        messAddStu.className = 'hint--top-left hint--success add';
        messAddStu.setAttribute('aria-label', 'Add new participant');
        let btnAddStudent = document.createElement('i');
        btnAddStudent.className = 'fas fa-user-plus';
        btnAddStudent.style.fontSize = '25px';
        btnAddStudent.id = id;
        btnAddStudent.style.cursor = 'pointer';
        btnAddStudent.addEventListener('click', () => {
            this.formularioDeParticipante(id)
        });

        let messViewP = document.createElement('span');
        messViewP.className = 'hint--top hint--success view';
        messViewP.setAttribute('aria-label', 'View participants');
        let btnViewParticipants = document.createElement('i');
        btnViewParticipants.className = 'fas fa-users';
        btnViewParticipants.style.fontSize = '25px';
        btnViewParticipants.id = id;
        btnViewParticipants.style.cursor = 'pointer';
        btnViewParticipants.addEventListener('click', () => {
            this.windowViewParticipants(id);
        });

        messAddStu.appendChild(btnAddStudent);
        messViewP.appendChild(btnViewParticipants);
        messEditWor.appendChild(btnEditTaller);
        messDelWor.appendChild(btnDeleteTaller);
        menuOptions.appendChild(messDelWor)
        menuOptions.appendChild(messEditWor)
        menuOptions.appendChild(messViewP)
        menuOptions.appendChild(messAddStu)
        div.appendChild(h3);
        div.appendChild(hr);
        div.appendChild(placesd);
        div.appendChild(hoursd);
        div.appendChild(divDate);
        div.appendChild(menuOptions);

        this._taller.appendChild(div);
    }

    generateId() {
        this._id = JSON.parse(localStorage.getItem('id'));
        this._id++;
        localStorage.setItem('id', this._id);
        return this._id;
    }

    crearFormularioDeEdicion(modificacion) {
        let tModification = modificacion;
        this._talleres = JSON.parse(localStorage.getItem('talleres'));
        this._talleres.forEach((e, index) => {
            if (e.id === tModification) {
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

                let formGroup1 = document.createElement('div');
                formGroup1.className = 'form-group';
                let label0 = document.createElement('label');
                label0.textContent = 'Name of the workshop:'
                label0.className = 'inputs';
                let inpt0 = document.createElement('input');
                inpt0.type = 'text';
                inpt0.className = 'form-control inputs';
                inpt0.placeholder = 'Escriba aquí';
                inpt0.value = e.name;
                inpt0.id = 'name';
                inpt0.required = true;

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
                inpt3.value = e.hours;

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

                let formGroup5 = document.createElement('div');
                formGroup5.className = 'form-group';
                let label4 = document.createElement('label');
                label4.textContent = 'Number of places:'
                label4.className = 'inputs';
                let inpt4 = document.createElement('input');
                inpt4.type = 'number';
                inpt4.className = 'form-control inputs';
                inpt4.id = 'cupo';
                inpt4.value = e.places;
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
                        let color = e.color;
                        let id = e.id;
                        let name = inpt0.value;
                        let dateStar = inpt1.value;
                        let dateEnd = inpt2.value;
                        let hour = inpt3.value;
                        let places = inpt4.value;

                        let sDateStart = this.getDateOfString(dateStar);
                        let sDateEnd = this.getDateOfString(dateEnd);

                        let newObj = {
                            color: color,
                            id: id,
                            name: name,
                            dateStart: sDateStart,
                            dateEnd: sDateEnd,
                            hours: hour,
                            places: places
                        }
                        this._talleres.splice(index, 1, newObj);
                        localStorage.setItem('talleres', JSON.stringify(this._talleres));
                        this._body.removeChild(divBlack);
                        this._taller.innerHTML = " ";
                        this.initCards();

                        Swal.fire({
                            title: 'Ready!',
                            text: 'workshop successfully edited!',
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

                let divBlack = document.createElement('div');
                divBlack.className = 'divBlack';
                divBlack.appendChild(form);
                this._body.appendChild(divBlack);
            }
        });
    }

    getDateOfString(date) {
        let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        let sDate = date.split("-");
        let oDate = new Date(sDate[0], sDate[1] - 1, sDate[2]);
        let day = this.getNumberAs2Digits(oDate.getDate());
        let sDateD = day + "/" + meses[oDate.getMonth()] + "/" + oDate.getFullYear();
        return sDateD;
    }

    getNumberAs2Digits(number) {
        if (number < 10) {
            return "0" + number
        }
        return number;
    }

    formularioDeParticipante(id) {
        let form = document.createElement('form');
        form.className = 'needs-validation formEdit';
        form.noValidate = true;
        let columnLeft = document.createElement('div');
        columnLeft.className = 'columnLeft';

        let closeWindow = document.createElement('i');
        closeWindow.className = 'fas fa-times closeAl';
        closeWindow.addEventListener('click', () => {
            this._body.removeChild(divBlack);
        })

        let formGroup1 = document.createElement('div');
        formGroup1.className = 'form-group';
        let label0 = document.createElement('label');
        label0.textContent = 'Name of the participant: '
        label0.className = 'inputs';
        let inpt0 = document.createElement('input');
        inpt0.type = 'text';
        inpt0.className = 'form-control inputs';
        inpt0.placeholder = 'Type Here';
        inpt0.id = 'name';
        inpt0.required = true;

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

        let formGroup2 = document.createElement('div');
        formGroup2.className = 'form-group';
        let label1 = document.createElement('label');
        label1.textContent = 'Birthdate: '
        label1.className = 'inputs';
        let inpt1 = document.createElement('input');
        inpt1.type = 'date';
        inpt1.className = 'form-control inputs';
        inpt1.id = 'fechaInicio';
        inpt1.required = true;

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

        let formGroup3 = document.createElement('div');
        formGroup3.className = 'form-group';
        let label2 = document.createElement('label');
        label2.textContent = 'E-mail: '
        label2.className = 'inputs';
        let inpt2 = document.createElement('input');
        inpt2.type = 'email';
        inpt2.className = 'form-control inputs';
        inpt2.id = 'fechaFin';
        inpt2.required = true;

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

        let btnSave = document.createElement('button');
        btnSave.type = 'button';
        btnSave.className = 'btn btn-success'
        btnSave.textContent = 'Add Participant';
        btnSave.style.marginLeft = '50px';
        btnSave.addEventListener('click', () => {
            if (form.checkValidity() === true) {
                let iName = inpt0.value;
                let iBirthday = inpt1.value;
                let iEmail = inpt2.value;
                let iId = id;
                let participant = {
                    idPart: this.generateIdParticipant(),
                    name: iName,
                    bithdate: iBirthday,
                    email: iEmail,
                    idTaller: iId
                }
                let bandera = false;

                if (localStorage.getItem('people') === null) {
                    this._participant.push(participant);
                    Swal.fire({
                        title: 'Ready!',
                        text: 'This person has been deleted from this workshop!',
                        type: 'success',
                        confirmButtonText: 'OK'
                    });
                } else {
                    this._participant = JSON.parse(localStorage.getItem('people'));
                    this._participant.forEach((e, index) => {
                        if (e.email === participant.email && e.idTaller === participant.idTaller) {
                            console.log(e.idTaller, e.email)
                            console.log(participant.idTaller, participant.email)
                            Swal.fire({
                                title: 'Error!',
                                text: 'This person is already added to this workshop!',
                                type: 'error',
                                confirmButtonText: 'OK'
                            });
                            bandera = true;
                        }
                    })
                    if (bandera === false) {
                        this._participant.push(participant);
                        Swal.fire({
                            title: 'Ready!',
                            text: 'This person has been deleted from this workshop!',
                            type: 'success',
                            confirmButtonText: 'OK'
                        });
                    }
                }
                localStorage.setItem('people', JSON.stringify(this._participant));
                this._body.removeChild(divBlack);
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
        columnLeft.appendChild(btnSave);
        columnLeft.appendChild(btnCancel);
        form.appendChild(columnLeft);

        let divBlack = document.createElement('div');
        divBlack.className = 'divBlack';
        divBlack.appendChild(form);
        this._body.appendChild(divBlack);
    }

    windowViewParticipants(id) {
        let form = document.createElement('div');
        form.className = "formCreate2";
        let h2 = document.createElement('h2');
        h2.textContent = "Participants";
        h2.style.color = "white";

        let divTable = document.createElement('div');
        divTable.className = "divTable rounded";
        let div = document.createElement('div');
        div.style
        let table = document.createElement('table');
        table.className = "table table-striped rounded";
        table.style.margin = "15px";
        table.style.backgroundColor = "white";

        this._participant = JSON.parse(localStorage.getItem('people'));
        this._participant.forEach((e, index) => {
            this.newRowGenerate(id, e, table);
        });

        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');
        th.textContent = "Name";
        th2.textContent = "Birthday";
        th3.textContent = "Email";
        th4.textContent = "Acciones";

        table.appendChild(thead);
        thead.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);

        let closeWindow = document.createElement('i');
        closeWindow.className = 'fas fa-times close';
        closeWindow.addEventListener('click', () => {
            this._body.removeChild(divBlack);
        })

        form.appendChild(closeWindow);
        form.appendChild(h2);
        form.appendChild(divTable);
        divTable.appendChild(div);
        div.appendChild(table);

        let divBlack = document.createElement('div');
        divBlack.className = 'divBlack';
        divBlack.appendChild(form);
        this._body.appendChild(divBlack);
    }

    newRowGenerate(id, e, table) {
        if (e.idTaller === id) {
            let row = document.createElement('tr');
            row.id = e.idPart;
            let celda1 = document.createElement('td');
            celda1.textContent = e.name;
            let celda2 = document.createElement('td');
            celda2.textContent = e.bithdate;
            let celda3 = document.createElement('td');
            celda3.textContent = e.email;
            let celda4 = document.createElement('td');
            let buttonDelete = document.createElement("input");
            buttonDelete.className = "btn btn-danger";
            buttonDelete.value = 'Eliminar';
            buttonDelete.type = "button";
            buttonDelete.addEventListener('click', () => {
                this._participant = JSON.parse(localStorage.getItem('people'));
                this._participant.forEach((j, indice) => {
                    Swal.fire({
                        title: 'Are you sure to delete this participant?',
                        text: "You won't be able to revert this!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => { 
                        if (result.value) {
                            if ((e.idTaller === j.idTaller) && (e.idPart === j.idPart)) {
                                this._participant.splice(indice, 1);
                                localStorage.setItem('people', JSON.stringify(this._participant));
                                table.removeChild(row);
                                Swal.fire({
                                    type: "success",
                                    title: "Successfully",
                                    text: "This participant has been eliminated",
                                    confirmButtonText: "ok"
                                });
                            }
                        }
                    })
                })
            });
            celda4.appendChild(buttonDelete);

            row.appendChild(celda1);
            row.appendChild(celda2);
            row.appendChild(celda3);
            row.appendChild(celda4);
            table.appendChild(row);
        }
    }

    generateIdParticipant() {
        this._id = JSON.parse(localStorage.getItem('idPart'));
        this._id++;
        localStorage.setItem('idPart', this._id);
        return this._id;
    }
}