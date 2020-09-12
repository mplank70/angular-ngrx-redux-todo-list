import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoListComponent } from './pages/todos/todo-list/todo-list.component';
import { TodoFormComponent } from './pages/todos/todo-form/todo-form.component';
import { StoreModule } from '@ngrx/store';
import { store } from './stores/todos/todos.store';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot(store) ],
  declarations: [ AppComponent, HelloComponent, TodosComponent, TodoListComponent, TodoFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
