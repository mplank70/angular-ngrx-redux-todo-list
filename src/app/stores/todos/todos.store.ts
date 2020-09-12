import * as fromTodo from "./reducers/todos.reducer";
import { Store, combineReducers } from "@ngrx/store";

export interface ITodoRootState {
  todos: fromTodo.ITodoState
}

export const store = {
  todos: fromTodo.todoReducer
}