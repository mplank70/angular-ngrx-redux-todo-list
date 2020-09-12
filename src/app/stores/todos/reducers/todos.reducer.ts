import * as TodosActions from '../todos.actions';
const initialState = {
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
    default:
        return state;
  }
}