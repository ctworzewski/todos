const addTask = document.querySelector('.addTask');
const input = document.querySelector('.input');
let ul = document.querySelector('.listTask');

let  arr = [];
let value = input.value;
addTask.addEventListener('click', handleClick);

function handleClick(e) {
    let item = document.createElement('li');
    console.log(e.target);
    value = input.value
    ul.appendChild(item);
    arr.push(value);
    console.log(arr);
    input.value = '';
}