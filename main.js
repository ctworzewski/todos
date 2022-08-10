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
    value = input.value;
    arr.push(value);
    ul.appendChild(item);
    item.innerHTML = value;
    input.value = '';
    removeTask();
}

function removeTask() {
    
    del.textContent = 'usuń';

}