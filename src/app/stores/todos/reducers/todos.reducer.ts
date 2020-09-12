import * as TodosActions from '../todos.action';

export interface ITodoState {
  todos: any[];
  currentFilter: string;
}

const initialState: ITodoState = {
  todos: [],
  currentFilter: 'SHOW_ALL'
}

export function todoReducer(state = initialState, action){
  switch(action.type){
    case TodosActions.ADD_TODO:
      return {
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          completed: action.completed
        }),
        currentFilter: state.currentFilter
      };
      case TodosActions.TOGGLE_TODO:
        return {
          todos: toggle(state.todos, action),
          currentFilter: state.currentFilter
        }
      case TodosActions.REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id != action.id),
        currentFilter: state.currentFilter
      }
      case TodosActions.SET_CURRENT_FILTER:
      return {
        todos: state.todos.map(todo => todo),
        currentFilter: action.filter
      }
    default:
        return state;
  }

  function toggle(todos, action)
  {
    return todos.map(todo => {
      if(todo.id !== action.id){
        return todo;
      }

      return {
        id: todo.id,
        text: todo.text,
        completed: !todo.completed
      };
    });
  }
}