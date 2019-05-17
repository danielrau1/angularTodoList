
                           // [2.1a]   [8.1]
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Todo} from '../models/todo'; // [2.1c]
import {TodoService} from '../todo.service'; // [7.1]

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // [8.3]
  @Input() todo1: Todo; // [2.1b], (Q1)

               // [7.1]
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // [3.3]
setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo1.completed,
    };
    return classes;
}


onToggle(todo1) {
    // [4.1b] toggle in UI
    todo1.completed = !todo1.completed;
    // [7.2] toggle on Server
    this.todoService.toggleCompleted(todo1).subscribe(todo =>
  console.log(todo));
}

// [4.2b]
  onDelete(todo1) {
    // console.log('delete');
// [8.2]
    this.deleteTodo.emit(todo1);
  }

}
