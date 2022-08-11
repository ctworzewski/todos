const add = document.querySelector('.addTask');
const input = document.querySelector('.input');
let ul = document.querySelector('.listTask');

add.addEventListener('click',  addTask);

function addTask() {
    let value = input.value;
    let item = document.createElement('li');
    let btnDelTask = document.createElement('button');
    let btnJobDone = document.createElement('button');

    let circleBox = document.createElement('div');
    let BoxAll = document.createElement('div');
    
    if (input.value !== '') {
        value = input.value;
        item.innerHTML = value;
        ul.appendChild(BoxAll);
        BoxAll.appendChild(circleBox);
        BoxAll.appendChild(item);
        BoxAll.appendChild(btnDelTask);
        BoxAll.appendChild(btnJobDone);
        BoxAll.classList.add*('boxAll');

        btnJobDone.innerHTML = 'Zakończ';
        btnDelTask.innerHTML = 'Usuń';
        btnJobDone.classList.add('job-done');
        circleBox.classList.add('circle');
        // btnDelTask.class
    input.value = '';
    btnDelTask.addEventListener('click', function() {
        removeTask(item,btnDelTask);
    });
    } else {
        input.value = 'podaj zadanie';
        console.log('podaj zadanie');
    }
}


function removeTask(a,b) {
    ul.removeChild(a);
    ul.removeChild(b);
}