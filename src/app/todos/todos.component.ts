import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo'; // [1]
import {TodoService} from '../todo.service'; // [5.2]


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  todos: Todo[]; // [1]

                                  // [5.3]
  constructor(private todoService: TodoService) {}


  ngOnInit() {
    // [1.1]
    /*
  this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ];
    */

    // [5.4]
    // this.todos = this.todoService.getTodos();

    // [6.8]
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

  }


  // [8.5]
  deleteTodo(todo: Todo) {
    // delete from the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // delete from the Server [8.6]
    this.todoService.deleteTodo(todo).subscribe();
  }


  // [11.7]
  addTodo(todo: Todo) {
    this.todoService.addTodo2(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
