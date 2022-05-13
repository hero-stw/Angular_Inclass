import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-gender',
  templateUrl: './table-gender.component.html',
  styleUrls: ['./table-gender.component.css']
})
export class TableGenderComponent implements OnInit {
  @Input('gen') gender: number;
  constructor() {
    this.gender = 0;
   }

  ngOnInit(): void {
  }

}
