const add = document.querySelector('.addTask');
const input = document.querySelector('.input');
let ul = document.querySelector('.listTask');

add.addEventListener('click',  addTask);

function addTask() {
    let value = input.value;
    let item = document.createElement('li');
    let btnDelTask = document.createElement('button');
    
    if (input.value !== '') {
        value = input.value;
    item.innerHTML = value;
    ul.appendChild(item);
    ul.appendChild(btnDelTask);
    btnDelTask.innerHTML = 'Usuń';
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