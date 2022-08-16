const input = document.querySelector(".input");
const btn = document.querySelector(".add");
const tasksList = document.querySelector(".tasksList");

function addTask(e) {
  const item = document.createElement("li");
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
}

btn.addEventListener("click", addTask);
