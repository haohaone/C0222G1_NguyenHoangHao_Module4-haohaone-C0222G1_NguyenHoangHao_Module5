import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../student';
import {Class} from '../class';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URL = 'http://localhost:3000/ticket';

  constructor(private httpClient: HttpClient) {
  }

  getMaxPage(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  showStudentList(searchByName: string, page: number): Observable<Student[]> {
    console.log(searchByName);
    console.log(page);
    return this.httpClient.get<Student[]>(this.API_URL + '?name_like=' + searchByName + '&_page=' + page + '&_limit=4');
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }

  findId(id: string): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + '/' + id);
  }

  save(student: Student) {
    return this.httpClient.post<void>(this.API_URL, student);
  }

  edit(student: Student) {
    return this.httpClient.patch<void>(this.API_URL + '/' + student.id, student);
  }

  showClassList() {
    return this.httpClient.get<Class[]>('http://localhost:3000/classList');
  }
}
