import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../../stores/todos/todos.store';
import { TodosActions } from '../../../stores/todos/todos.action';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(public store: Store<fromRoot.ITodoRootState>, private todoActions: TodosActions) { }

  ngOnInit() {
  }

  onAddTodo(input){
    this.store.dispatch(this.todoActions.addTodo(input.value));
    input.value = '';
  }

}