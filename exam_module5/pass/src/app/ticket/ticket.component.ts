import { Component, OnInit } from '@angular/core';
import {TicketService} from "../service/ticket.service";
import {ToastrService} from "ngx-toastr";
import {Ticket} from "../model/ticket";
import {HomeBus} from "../model/homeBus";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticketList: Ticket[];
  ticket: Ticket;
  page = 0;
  maxPage: number;
  length: number;
  searchStartPlace = '';
  searchEndPlace = '';
  searchStartDate = '';
  searchEndDate = '';
  HomeBusList: HomeBus[];
  ticketForm: FormGroup = new FormGroup({
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    startPlace: new FormControl('', Validators.required),
    endPlace: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    timeStart: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    homeBus: new FormControl('', Validators.required)
  }, this.checkStartDate);

  constructor(private ticketService: TicketService,
              private toast: ToastrService) { }
  ngOnInit(): void {
    this.getTicketList();

    this.getHomeBusList();

    this.ticketService.findId(1).subscribe(
      value => this.ticket = value
    );
  }

  checkStartDate(abstractControl: AbstractControl): any {
    const startDate = new Date(abstractControl.value.startDate);
    const now = new Date();
    return (startDate.getTime() >= now.getTime()) ? null : {beforeDate: true};
  }

  getTicketList() {
    this.ticketService.showTicketList(
      this.searchStartPlace,
      this.searchEndPlace,
      this.searchStartDate,
      this.searchEndDate,
      this.page).subscribe(
      value => {this.ticketList = value.content; this.maxPage = value.totalPages; });
  }

  getHomeBusList() {
    this.ticketService.showHomeBus().subscribe(
      value => this.HomeBusList = value);
  }

  valueOfId(id: number) {
    this.ticketService.findId(id).subscribe(
      value => this.ticket = value
    );
  }

  buy() {
    --this.ticket.quantity;
    this.ticketService.edit(this.ticket).subscribe(
      value => {
      },
      error => {
      },
      () => {
        this.getTicketList();
        this.toast.success('Buy ticket successful!', 'Ticket!');
      }
    );
  }

  addNew() {
    this.ticket = this.ticketForm.value;
    this.ticketService.save(this.ticket).subscribe(
      value => {
      },
      error => {
      },
      () => {
        this.getTicketList();
        this.toast.success('Add new successful!', 'Ticket!');
        this.ticketForm.reset();
      }
    );
  }

  previous() {
    --this.page;
    this.ticketService.showTicketList(
      this.searchStartPlace,
      this.searchEndPlace,
      this.searchStartDate,
      this.searchEndDate,
      this.page).subscribe(value => {this.ticketList = value.content; this.maxPage = value.totalPages; });
  }

  next() {
    ++this.page;
    this.ticketService.showTicketList(
      this.searchStartPlace,
      this.searchEndPlace,
      this.searchStartDate,
      this.searchEndDate,
      this.page
    ).subscribe(value => {this.ticketList = value.content; this.maxPage = value.totalPages; });
  }

  search() {
    this.ticketService.showTicketList(
      this.searchStartPlace,
      this.searchEndPlace,
      this.searchStartDate,
      this.searchEndDate,
      0
    ).subscribe(
      value => {this.ticketList = value.content; this.maxPage = value.totalPages; });
  }

  home() {
    this.ticketService.showTicketList('', '' , '0000-00-00', '9999-12-31', 0).subscribe(
      value => {this.ticketList = value.content; this.maxPage = value.totalPages; },
      error => {},
      () => {this.page = 0; this.searchEndPlace = ''; this.searchStartPlace = ''; }
    );

  }
}
