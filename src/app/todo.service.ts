import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; // [6.2]
import {Todo} from './models/todo';
import {Observable} from 'rxjs'; // [6.5]

// [7.3b]
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos'; // [6.4]
  todosLimit = '?_limit=5';

             // [6.3]
  constructor(private http: HttpClient) { }


              // [6.5]
  getTodos(): Observable<Todo[]> {
    // [5.1]
    /*
    return [
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
         // [6.6]
return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // [7.3a]
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }


  // [8.6]
deleteTodo(todo: Todo): Observable<Todo> {
  const url = `${this.todosUrl}/${todo.id}`;
  return this.http.delete<Todo>(url, httpOptions);
}

// [11.8]
  addTodo2(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

}
