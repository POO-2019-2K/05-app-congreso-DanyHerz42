import Talleres from "./talleres.js";
document.querySelector("#btn").addEventListener('click', () => {
    var div = document.createElement('div');
    div.className = 'borde';
    
    var label0 = document.createElement('label');
    label0.textContent = 'Nombre del taller'
    label0.className = 'inputs';

    var inpt1 = document.createElement('input');
    inpt1.type = 'text';
    inpt1.className = 'form-control inputs';
    inpt1.placeholder = 'Escriba aquí'

    var label1 = document.createElement('label');
    label1.textContent = 'Fecha de inicio: '
    label1.className = 'inputs';

    var inpt2 = document.createElement('input');
    inpt2.type = 'date';
    inpt2.className = 'form-control inputs';
    
    var label2 = document.createElement('label');
    label2.textContent = 'Fecha de fin: '
    label2.className = 'inputs';

    var inpt3 = document.createElement('input');
    inpt3.type = 'date';
    inpt3.className = 'form-control inputs';

    var btnSave = document.createElement('button');
    btnSave.type = 'button';
    btnSave.className = 'btn btn-danger'
    btnSave.textContent ='Guardar';
    btnSave.addEventListener('click', () => {
        div.innerHTML = '';
        div.style.height = '170px';
        div.style.transition = 'all .5s';
        div.className = 'gradient';

        var name = inpt1.value;
        var h2 = document.createElement('h2');
        h2.textContent = name;
        h2.className = 'nombreDeTaller';

        div.appendChild(h2);
    });

    
    div.appendChild(label0);
    div.appendChild(inpt1);
    div.appendChild(label1);
    div.appendChild(inpt2);
    div.appendChild(label2);
    div.appendChild(inpt3);
    div.appendChild(btnSave);
    var actual = document.querySelector("#btn");
    taller.insertBefore(div,actual);

    
})