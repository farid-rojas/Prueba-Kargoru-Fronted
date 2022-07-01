import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../mock-quotes';
import { Quote } from "../quote";

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.css']
})
export class ViewQuotesComponent implements OnInit {

  quotes = QUOTES;

  constructor() { }

  ngOnInit(): void {
  }

}
