import { todoList } from "./todo";

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
