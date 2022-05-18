import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
  }
  handleClick() {
    console.log('Hello');
    
  }
  @Input('users') teachers: any;
}
