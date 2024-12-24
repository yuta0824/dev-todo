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
  console.log(todoList);
});
