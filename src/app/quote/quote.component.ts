import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  Quote = {
    id: 1,document: 123456789,name: 'farid',weight: '20KG',addressSource: 'crr 20a # 9a - 57 ',addressDestination: 'cll 11b # 17b - 37'}


  onRegister(){
    console.log
  }

  constructor() { }

  ngOnInit(): void {
  }

}
