import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursConverter'
})
export class HoursConverterPipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minute: number = Math.floor((value - (hours * 3600)) / 60);
    const second: number = value - (hours * 3600) - (minute * 60);
    const time: string = hours + ' : ' + minute + ' : ' + second;
    return time;
  }
}
