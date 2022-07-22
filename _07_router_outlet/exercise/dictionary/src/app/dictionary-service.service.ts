import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionary:string[][] = [
    ['dog','cat','bird','pig'],
    ['con chó','con mèo','con chim','con heo']
  ]
  constructor() { }

  getResult(word: string){
    for (let i = 0; i < this.dictionary[0].length; i++) {
      console.log(this.dictionary[0][i])
      if (this.dictionary[0][i] === word){
        return this.dictionary[1][i];
      }
    }
    return 'Không có từ này trong từ điển'
  }
}
