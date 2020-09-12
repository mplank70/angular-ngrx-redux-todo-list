import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoListComponent } from './pages/todos/todo-list/todo-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TodosComponent, TodoListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
