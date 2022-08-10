const $ = document.querySelector.bind(document);
const allBtn = document.querySelector('.boxApp');
const input = document.querySelector('.input');
const listTask = document.querySelector('.listTasks');

const  arr = [];

allBtn.addEventListener('click', handleClick);

function handleClick(e) {
    console.log(e.target);
    let value = input.value;
    let item = document.createElement('li');

    item.appendChild(value);
    listTask.appendChild(item);

    console.log(input.value);
    if (value != undefined) {

    }



}