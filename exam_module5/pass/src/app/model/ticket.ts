import {HomeBus} from "./homeBus";

export interface Ticket {
  id: number;
  price: number;
  startPlace: string;
  endPlace: string;
  startDate: string;
  timeStart: string;
  quantity: number;
  homeBus: HomeBus;
}
