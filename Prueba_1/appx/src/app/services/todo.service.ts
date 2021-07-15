import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CommentModel } from '../models/comment.model';
import { TodoModel } from '../models/todo.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class TodosService {
  private Url: string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(
    private http: HttpClient
  ) { }

  getTodos(id:any): Observable<TodoModel[]>{
    return this.http.get<TodoModel[]>(this.Url + "?userId=" +id + "&_sort=id&_order=desc")
  }
  createTodo(todo:TodoModel) {
     this.http.post(`${this.Url}`, JSON.stringify(
      todo
    ),{ 
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }})
  }

}