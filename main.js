const add = document.querySelector('.addTask');
const input = document.querySelector('.input');
 
let ul = document.querySelector('.listTask');
let value = input.value;
let  arr = [];



add.addEventListener('click',  addTask);


let boxItem = document.createElement('div');
let btnDelTask = document.createElement('button');
let item = document.createElement('li');
function addTask() {
    btnDelTask.addEventListener('click', removeTask);
    value = input.value;
    // arr.push(value);
    boxItem.classList.add('boxItem')
    ul.appendChild(boxItem);
    boxItem.appendChild(item);
    boxItem.appendChild(btnDelTask)
    item.innerHTML = value;
    btnDelTask.innerHTML = 'Usuń';
    input.value = '';
}


function removeTask() {
    ul.remove(boxItem);
    // ul.remove(btnDelTask);
}