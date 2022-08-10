const $ = document.querySelector.bind(document);
const addTask = document.querySelector('.addTask');
const input = document.querySelector('.input');
const listTask = document.querySelector('.listTasks');

const  arr = [];

addTask.addEventListener('click', handleClick);

function handleClick(e) {
    console.log(e.target);
    let value = input.value;
    let item = document.createElement('li');
    arr.push(value);
    console.log(arr);
    input.value = '';
    // item.appendChild(value);
    // listTask.appendChild(item);

    console.log(input.value);
    if (value != undefined) {

    }



}