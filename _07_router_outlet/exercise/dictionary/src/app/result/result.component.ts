import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../dictionary-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  mean:string;
  constructor(private dictionaryService: DictionaryServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const word: string = this.activatedRoute.snapshot.params.word;
    this.mean = this.dictionaryService.getResult(word);
  }

}
