import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../model/ticket";
import {HomeBus} from "../model/homeBus";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  API_URL = 'http://localhost:3000/ticket';

  constructor(private httpClient: HttpClient) {
  }

  getMaxPage(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.API_URL);
  }

  showTicketList(startPlace: string, endPlace: string, startDate: string, endDate: string, page: number): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>
    (this.API_URL +
      '?endPlace_like=' + endPlace +
      '&startPlace_like=' + startPlace +
      '&startDate_gte=' + startDate +
      '&startDate_lte=' + endDate +
      '&_page=' + page +
      '&_limit=4');
  }

  findId(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.API_URL + '/' + id);
  }

  save(ticket: Ticket) {
    return this.httpClient.post<void>(this.API_URL, ticket);
  }

  edit(ticket: Ticket) {
    return this.httpClient.patch<void>(this.API_URL + '/' + ticket.id, ticket);
  }

  showHomeBus() {
    return this.httpClient.get<HomeBus[]>('http://localhost:3000/homeBus');
  }
}
