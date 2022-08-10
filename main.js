const add = document.querySelector('.addTask');
const input = document.querySelector('.input');
let ul = document.querySelector('.listTask');
// const del = document.querySelector('.del');

let  arr = [];
let value = input.value;
let del = document.createElement('button');
add.addEventListener('click', handleClick);
del.addEventListener('click', removeTask);
function handleClick() {
    addTask();
    
}

function addTask() {
    let item = document.createElement('li');
    let btn = document.createElement('button');
    value = input.value;
    arr.push(value);
    ul.appendChild(item);
    ul.appendChild(btn)
    item.innerHTML = value;
    btn.innerHTML = 'Usuń';
    input.value = '';
    // removeTask();
}

function removeTask() {

}