import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Quote = {id: 1,document: 123456789,name: 'farid',weight: '20KG',addressSource: 'crr 20a # 9a - 57 ',addressDestination: 'cll 11b # 17b - 37'}
  onSearch(){
    console.log
  }

  constructor() { }

  ngOnInit(): void {
  }

}
