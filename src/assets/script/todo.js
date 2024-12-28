/**
 * 変数の定義
 */
let todoList = [];
const tableBodyElement = document.querySelector("#todo-list");
const filterInputElement = document.querySelector("#filter");
let filterWord = "";

/**
 * 入力されたTODOを取得する関数
 *
 * @returns {void}
 */
export const registerNewTodo = () => {
  // 入力されたTODOの情報を取得
  const newTodoName = document.querySelector("#new-todo-name");
  const newPerson = document.querySelector("#new-person");
  const newDeadline = document.querySelector("#new-deadline");

  // 取得したTODOの情報をTODOリストに追加
  todoList.push({
    todoId: Date.now(),
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
 * TODOを削除する関数
 *
 * @param {number} todoId - 削除するTODOのID
 * @returns {void}
 */
const deleteTodo = (todoId) => {
  todoList = todoList.filter((todo) => todoId !== todo.todoId);
  renderTodoListElement(["border", "border-gray-300", "px-2", "py-2"]);
};

/**
 * TODOの一覧を描写する関数。
 * フィルター機能で絞り込んだTODOの一覧を描写する。
 *
 * @param {string[]} classes - クラス属性の配列
 * @returns {void}
 */
export const renderTodoListElement = (classes) => {
  deleteTodoList();

  todoList
    .filter(
      (todo) =>
        // 絞り込み機能で絞り込んだTODOの一覧を描写する
        todo.todoName.includes(filterWord) || todo.person.includes(filterWord)
    )
    .forEach((todo) => {
      // TODO名に関するtdタグを作成
      const todoNameElement = document.createElement("td");
      todoNameElement.textContent = todo.todoName;
      todoNameElement.classList.add(...classes);

      // 担当者に関するtdタグを作成
      const personElement = document.createElement("td");
      personElement.textContent = todo.person;
      personElement.classList.add(...classes);

      // 期限に関するtdタグを作成
      const deadlineElement = document.createElement("td");
      deadlineElement.textContent = todo.deadline;
      deadlineElement.classList.add(...classes);

      // 削除ボタンを作成
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "削除";
      deleteButton.classList.add(
        "text-white",
        "rounded",
        "bg-red-600",
        "border-gray-300",
        "px-2",
        "py-1"
      );
      deleteButton.addEventListener("click", () => {
        deleteTodo(todo.todoId);
      });

      // 削除ボタンに関するtdタグを作成
      const deleteButtonElement = document.createElement("td");
      deleteButtonElement.classList.add(...classes, "text-center");
      deleteButtonElement.appendChild(deleteButton);

      // trタグを作成
      const trElement = document.createElement("tr");
      trElement.appendChild(todoNameElement);
      trElement.appendChild(personElement);
      trElement.appendChild(deadlineElement);
      trElement.appendChild(deleteButtonElement);
      tableBodyElement.appendChild(trElement);
    });
};

/**
 * 絞り込み機能に入力された文字列が変更されたときの処理
 *
 * @returns {void}
 */
filterInputElement.addEventListener("input", () => {
  filterWord = filterInputElement.value;
  renderTodoListElement(["border", "border-gray-300", "px-2", "py-2"]);
});
