/**
 * 変数の定義
 */
const todoList = [];
const tableBodyElement = document.querySelector("#todo-list");
const buttonRegister = document.querySelector("#button-register");
const filterInputElement = document.querySelector("#filter");
let filterWord = "";

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
 * TODOの一覧を描写する関数。
 * フィルター機能で絞り込んだTODOの一覧を描写する。
 *
 * @param {string[]} classes - クラス属性の配列
 * @returns {void}
 */
const renderTodoListElement = (classes) => {
  deleteTodoList();

  todoList
    .filter(
      (todo) =>
        todo.todoName.includes(filterWord) || todo.person.includes(filterWord)
    )
    .forEach((todo) => {
      const todoNameElement = document.createElement("td");
      todoNameElement.textContent = todo.todoName;
      todoNameElement.classList.add(...classes);

      const personElement = document.createElement("td");
      personElement.textContent = todo.person;
      personElement.classList.add(...classes);

      const deadlineElement = document.createElement("td");
      deadlineElement.textContent = todo.deadline;
      deadlineElement.classList.add(...classes);

      // ここに削除ボタンを追加
      // ボタンの側
      // ボタンのイベント
      // 削除ボタンがクリックされたときに、自分のidと一致しないものだけ、表示することによって、関節的に削除ボタンの機能を果たす
      // 再起処理で、自分を呼び出すことで、削除ボタンを押したときに、再度、削除ボタンを表示する
      const deleteButtonElement = document.createElement("td");
      deleteButtonElement.classList.add(...classes, "text-center");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "削除";
      deleteButton.classList.add("border", "border-gray-300", "px-4", "py-1");
      deleteButton.addEventListener("click", () => {
        // 削除ボタンがクリックされたときに、自分のidと一致しないものだけ、表示することによって、関節的に削除ボタンの機能を果たす
      });

      deleteButtonElement.appendChild(deleteButton);
      const trElement = document.createElement("tr");
      trElement.appendChild(todoNameElement);
      trElement.appendChild(personElement);
      trElement.appendChild(deadlineElement);
      trElement.appendChild(deleteButtonElement);
      tableBodyElement.appendChild(trElement);
    });
};

/**
 * 登録ボタンがクリックされたときの処理
 *
 * @returns {void}
 */
buttonRegister.addEventListener("click", () => {
  registerNewTodo();
  renderTodoListElement(["border", "border-gray-300", "px-4", "py-2"]);
});

/**
 * 絞り込み機能に入力された文字列が変更されたときの処理
 *
 * @returns {void}
 */
filterInputElement.addEventListener("input", () => {
  filterWord = filterInputElement.value;
  renderTodoListElement(["border", "border-gray-300", "px-4", "py-2"]);
});
