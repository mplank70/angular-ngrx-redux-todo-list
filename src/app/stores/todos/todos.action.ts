export const ADD_TODO           = 'ADD_TODO';
export const TOGGLE_TODO        = 'TOGGLE_TODO';
export const REMOVE_TODO        = 'REMOVE_TODO';
export const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';

export class TodosActions {
  nextTodoId: number = 0;
  constructor(){}

  addTodo(text){
    return {
      type: ADD_TODO,
      id: this.nextTodoId++,
      text: text,
      completed: false
    }
  }

  
}