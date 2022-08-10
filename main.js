const add = document.querySelector('.addTask');
const input = document.querySelector('.input');
let ul = document.querySelector('.listTask');
// const del = document.querySelector('.del');

let  arr = [];
let value = input.value;
// let del = document.createElement('button');
let btnDelTask = document.createElement('button');
add.addEventListener('click', addTask);
btnDelTask.addEventListener('click', removeTask);
function mainApp() {
    addTask();
    removeTask();
    
}

let item = document.createElement('li');
function addTask() {
    value = input.value;
    arr.push(value);
    ul.appendChild(item);
    ul.appendChild(btnDelTask)
    item.innerHTML = value;
    btnDelTask.innerHTML = 'Usuń';
    input.value = '';
    // removeTask();
}

function removeTask(e) {
    let click = e.target;
    console.log('test kliknięcia usuń');
    console.log(click);
    ul.removeChild(item);
    ul.removeChild(btnDelTask);
}