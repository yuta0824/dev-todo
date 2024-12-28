import { registerNewTodo } from "./register";
import { renderTodoListElement } from "./todo";

const buttonRegister = document.querySelector("#button-register");

/**
 * 登録ボタンがクリックされたときの処理
 *
 * @returns {void}
 */
buttonRegister.addEventListener("click", () => {
  registerNewTodo();
  renderTodoListElement(["border", "border-gray-300", "px-2", "py-2"]);
});
