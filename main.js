const $ = document.querySelector.bind(document);
const input = document.querySelector(".input");
const btn = document.querySelector(".add");
const tasksList = document.querySelector(".tasksList");
const del = document.querySelector(".del");
// const appNode = $('[data-app="all"]');
let currentModeName;
function addTask(e) {
  const item = document.createElement("li");
  item.classList.add("item");
  let value = input.value;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Usuń";

  tasksList.appendChild(item);

  item.append(checkbox);
  item.append(value);
  item.append(btnDel);
  e.preventDefault();
  input.value = "";
  btnDel.addEventListener("click", function () {
    deleteTask(item);
  });

  checkbox.addEventListener("click", function () {
    jobDone(item);
  });
}

function deleteTask(a) {
  tasksList.removeChild(a);

}
function jobDone(a) {
  a.classList.add('job-done');
}


btn.addEventListener("click", addTask);

// function showStatus(e) {
//     const action = e.target.dataset.action;
//     console.log(action);

//     switch (action) {
//         case "ALL":
//             allTask();
//             break;
//         case "ACTIVE":
//             activeTask();
//             break;
//         case "COMPLETED":
//             completedTask();
//             break;
//             default:
//             return;
//     }
// }

// function allTask() {
//     console.log('wszystkie zadania');
// }
// function activeTask() {
//     console.log('aktywne zadania');
// }
// function completedTask() {
//     console.log('ukończone zadania');
// }
