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
  idTicket: number;
  ticket: Ticket;
  page = 1;
  maxPage: number;
  length: number;
  searchStartPlace = '';
  searchEndPlace = '';
  searchStartDate = '00-00-0000';
  searchEndDate = '31-12-9999';
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
    this.ticketService.getMaxPage().subscribe(value => this.length = value.length,
      error => {
      },
      () => {
        if (this.length % 4 === 0) {
          this.maxPage = this.length / 4;
        } else {
          this.maxPage = this.length / 4 + 1;
        }
      });

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
      value => this.ticketList = value);
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
      this.page).subscribe(value => this.ticketList = value);
  }

  next() {
    ++this.page;
    this.ticketService.showTicketList(
      this.searchStartPlace,
      this.searchEndPlace,
      this.searchStartDate,
      this.searchEndDate,
      this.page
    ).subscribe(value => this.ticketList = value);
  }

  search() {
    this.ticketService.showTicketList(
      this.searchStartPlace,
      this.searchEndPlace,
      this.searchStartDate,
      this.searchEndDate,
      1
    ).subscribe(
      value => this.ticketList = value);
  }

  home() {
    this.ticketService.showTicketList('', '' , '00-00-0000', '31-12-9999', 1).subscribe(
      value => {this.ticketList = value; },
      error => {},
      () => {this.page = 1; this.searchEndPlace = ''; this.searchStartPlace = ''; }
    );

  }
}
