import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

export const renderTodos = (elementId, todos = []) => {
    const element = document.querySelector(elementId);

    if (!element) {
        throw new Error(`Element ${elementId} not found`);
    }
    element.innerHTML = '';
    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });
};