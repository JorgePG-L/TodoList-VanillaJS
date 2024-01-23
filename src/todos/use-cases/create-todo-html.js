import { Todo } from "../models/todo.model";


export const createTodoHTML = (todo) => {
    if (!todo) throw new Error ('A TODO  object is required');
    const html = `
        
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
                <label>${todo.description}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${todo.title}">
        
    `;

             
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);
    if (todo.done)
        liElement.classList.add('completed')
    return liElement;
}
