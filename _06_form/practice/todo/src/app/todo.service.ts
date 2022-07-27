import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  API_URL = 'http://localhost:3000/Todo';

  showTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  saveTodo(todo: Todo): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, todo);
  }
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
  // findId(id: number): Observable<Todo> {
  //   return this.httpClient.get<Todo>(this.API_URL + '/' + id);
  // }
  // updateTodo(todo: Todo): Observable<void> {
  //   return this.httpClient.patch<void>(this.API_URL, todo);
  // }
}
