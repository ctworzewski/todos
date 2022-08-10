const add = document.querySelector('.addTask');
const input = document.querySelector('.input');

let ul = document.querySelector('.listTask');
let btnDelTask = document.createElement('button');
let item = document.createElement('li');
let value = input.value;
let  arr = [];

add.addEventListener('click', addTask);
btnDelTask.addEventListener('click', removeTask);

function addTask() {
    value = input.value;
    arr.push(value);
    ul.appendChild(item);
    ul.appendChild(btnDelTask)
    item.innerHTML = value;
    btnDelTask.innerHTML = 'Usuń';
    input.value = '';
}

function removeTask(e) {
    let click = e.target;
    console.log('test kliknięcia usuń');
    console.log(click);
    ul.removeChild(item);
    ul.removeChild(btnDelTask);
}