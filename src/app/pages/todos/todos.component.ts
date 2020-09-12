import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoRootState } from '../../stores/todos/todos.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<any[]>;

  constructor(public store: Store<ITodoRootState>) { 
    

  }

  ngOnInit() {
  }

}