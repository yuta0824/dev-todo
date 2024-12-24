const todoList = [];

const buttonRegister = document.querySelector("#button-register");

buttonRegister.addEventListener("click", () => {
  const newTodoName = document.querySelector("#new-todo-name");
  const newPerson = document.querySelector("#new-person");
  const newDeadline = document.querySelector("#new-deadline");

  const newTodoObject = {
    todoName: newTodoName.value,
    person: newPerson.value,
    deadline: newDeadline.value,
  };

  todoList.push(newTodoObject);
  const tableElement = document.querySelector("#todo-list");

  todoList.forEach((todo) => {
    const todoNameElement = document.createElement("td");
    todoNameElement.textContent = todo.todoName;
    todoNameElement.classList.add("border", "border-gray-300", "px-4", "py-2");

    const personElement = document.createElement("td");
    personElement.textContent = todo.person;
    personElement.classList.add("border", "border-gray-300", "px-4", "py-2");

    const deadlineElement = document.createElement("td");
    deadlineElement.textContent = todo.deadline;
    deadlineElement.classList.add("border", "border-gray-300", "px-4", "py-2");

    const trElement = document.createElement("tr");
    trElement.appendChild(todoNameElement);
    trElement.appendChild(personElement);
    trElement.appendChild(deadlineElement);

    tableElement.appendChild(trElement);
    console.log(tableElement);
  });
});
