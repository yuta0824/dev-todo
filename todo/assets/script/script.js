/**
 * 変数の初期化
 */
const todoList = [];
const tableBodyElement = document.querySelector("#todo-list");
const buttonRegister = document.querySelector("#button-register");

/**
 * 入力されたTODOを取得する関数
 *
 * @returns {void}
 */
const registerNewTodo = () => {
  const newTodoName = document.querySelector("#new-todo-name");
  const newPerson = document.querySelector("#new-person");
  const newDeadline = document.querySelector("#new-deadline");

  todoList.push({
    todoName: newTodoName.value,
    person: newPerson.value,
    deadline: newDeadline.value,
  });
};

/**
 * 既存のTODO一覧を削除する関数
 *
 * @returns {void}
 */
const deleteTodoList = () => {
  while (tableBodyElement.firstChild) {
    tableBodyElement.firstChild.remove();
  }
};

/**
 * TODOの一覧を描写する関数
 *
 * @param {string[]} classes - クラス属性の配列
 * @returns {void}
 */
const renderTodoListElement = (classes) => {
  todoList.forEach((todo) => {
    const todoNameElement = document.createElement("td");
    todoNameElement.textContent = todo.todoName;
    todoNameElement.classList.add(...classes);

    const personElement = document.createElement("td");
    personElement.textContent = todo.person;
    personElement.classList.add(...classes);

    const deadlineElement = document.createElement("td");
    deadlineElement.textContent = todo.deadline;
    deadlineElement.classList.add(...classes);

    const trElement = document.createElement("tr");
    trElement.appendChild(todoNameElement);
    trElement.appendChild(personElement);
    trElement.appendChild(deadlineElement);

    tableBodyElement.appendChild(trElement);
  });
};

/**
 * 登録ボタンがクリックされたときの処理
 *
 * @returns {void}
 */
buttonRegister.addEventListener("click", () => {
  deleteTodoList();
  registerNewTodo();
  renderTodoListElement(["border", "border-gray-300", "px-4", "py-2"]);
});
