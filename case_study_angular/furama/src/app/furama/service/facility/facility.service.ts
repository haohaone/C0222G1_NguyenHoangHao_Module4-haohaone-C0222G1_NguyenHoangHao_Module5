import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Facility} from "../../facility/facility";
import {Observable} from "rxjs";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    // 'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
  });

  getList(): Observable<Facility[]> {
    return this.http.get<Facility[]>('http://localhost:8080/facility', {headers: this.headers});
  }

  findById(id: string): Observable<Facility> {
    return this.http.get<Facility>('http://localhost:8080/facility/' + id, {headers: this.headers});
  }

  deleteById(id: string): Observable<void>{
    return this.http.delete<void>('http://localhost:8080/facility/delete/' + id , {headers: this.headers})
  }

  save(facility: Facility): Observable<void>{
    return this.http.post<void>('http://localhost:8080/facility/save', facility, {headers: this.headers})
  }

  edit(facility: Facility): Observable<void>{
    return this.http.patch<void>('http://localhost:8080/facility/edit', facility, {headers: this.headers})
  }
}
