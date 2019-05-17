                                  // [11.4]
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  title: string; // [10.2]
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); // [11.5]

  constructor() { }

  ngOnInit() {
  }

  // [11.3]
  onSubmit() {
    const todo = {
      title : this.title,
      completed: false
    };
       // [11.5]
    this.addTodo.emit(todo);
  }



}
