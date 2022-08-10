const addTask = document.querySelector('.addTask');
const input = document.querySelector('.input');
let ul = document.querySelector('.listTask');

let  arr = [];
let value = input.value;
addTask.addEventListener('click', handleClick);

function handleClick(e) {
    let item = document.createElement('li');
    console.log(e.target);
    value = input.value;
    arr.push(value);
    ul.appendChild(item);
    item.innerHTML = value;
    console.log(arr);
    input.value = '';
}