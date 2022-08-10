const add = document.querySelector('.addTask');
const input = document.querySelector('.input');
let ul = document.querySelector('.listTask');

let  arr = [];
let value = input.value;
add.addEventListener('click', handleClick);

function handleClick() {
    addTask();
}

function addTask() {
    let item = document.createElement('li');
    value = input.value;
    arr.push(value);
    ul.appendChild(item);
    item.innerHTML = value;
    input.value = '';
}