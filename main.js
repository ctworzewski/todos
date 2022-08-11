const add = document.querySelector('.addTask');
const input = document.querySelector('.input');
 
let ul = document.querySelector('.listTask');
let value = input.value;
let  arr = [];



let boxItem = document.createElement('div');
add.addEventListener('click',  addTask);


let btnDelTask = document.createElement('button');
function addTask() {
    let item = document.createElement('li');
    
    value = input.value;
    arr.push(value);
    boxItem.classList.add('boxItem');
    ul.appendChild(boxItem);
    boxItem.appendChild(item);
    boxItem.appendChild(btnDelTask);
    item.innerHTML = value;
    btnDelTask.innerHTML = 'Usuń';
    input.value = '';
}
btnDelTask.addEventListener('click', removeTask);


function removeTask() {
    ul.remove(boxItem);
    // ul.remove(btnDelTask);
}