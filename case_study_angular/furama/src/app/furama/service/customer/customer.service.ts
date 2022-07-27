import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../facility/facility";
import {Customer} from "../../customer/customer";
import {TypeCustomer} from "../../customer/type-customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    // 'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
  });

  getList(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/customer', {headers: this.headers});
  }

  getTypeCustomer(): Observable<TypeCustomer[]>{
    return this.http.get<TypeCustomer[]>('http://localhost:8080/type-customer', {headers: this.headers});
  }

  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/customer/' + id, {headers: this.headers});
  }

  getCustomer(id: string): Observable<Customer>{
    return this.http.get<Customer>('http://localhost:8080/customer' + id, {headers: this.headers});
  }

  deleteById(id: string): Observable<void>{
    return  this.http.delete<void>('http://localhost:8080/customer/delete/' + id , {headers: this.headers})
  }

  save(customer: Customer): Observable<void>{
    console.log(customer)
    return this.http.post<void>('http://localhost:8080/customer/save', customer, {headers: this.headers})
  }

  edit(customer: Customer): Observable<void>{
    return this.http.patch<void>('http://localhost:8080/customer/edit', customer, {headers: this.headers})
  }
}
