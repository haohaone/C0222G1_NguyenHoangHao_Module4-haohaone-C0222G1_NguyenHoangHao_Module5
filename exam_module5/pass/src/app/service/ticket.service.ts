import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../model/ticket';
import {HomeBus} from '../model/homeBus';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  API_URL = 'http://localhost:8080/ticket';

  constructor(private httpClient: HttpClient) {
  }

  getMaxPage(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.API_URL);
  }

  showTicketList(startPlace: string, endPlace: string, startDate: string, endDate: string, page: number): Observable<Ticket[]> {
    if (startPlace === '') {
      startPlace = '%20';
    }
    if (endPlace === '') {
      endPlace = '%20';
    }
    if (startDate === '') {
      startDate = '0000-00-00';
    }
    if (endDate === '') {
      endDate = '9999-12-31';
    }
    return this.httpClient.get<Ticket[]>
    (this.API_URL +
      '/' + startPlace +
      '/' + endPlace +
      '/' + startDate +
      '/' + endDate +
      '/' + page) ;
  }

  findId(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.API_URL + '/' + id);
  }

  save(ticket: Ticket) {
    return this.httpClient.post<void>(this.API_URL, ticket);
  }

  edit(ticket: Ticket) {
    return this.httpClient.patch<void>(this.API_URL, ticket);
  }

  showHomeBus() {
    return this.httpClient.get<HomeBus[]>('http://localhost:8080/homeBus');
  }
}
