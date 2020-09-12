import { ITodoState, todoReducer } from "./reducers/todos.reducer";
import { Store, combineReducers } from "@ngrx/store";
import { _createFeatureStore } from "@ngrx/store/src/store_module";

export interface ITodoRootState {
  todos: ITodoState
}

export const store: Store<ITodoRootState> = _createFeatureStore<ITodoRootState, any, any, any>(
  combineReducers({
    todos: todoReducer
  })
);