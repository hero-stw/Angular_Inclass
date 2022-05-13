import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input('state')  status: number;
  constructor() {
    this.status = 0;
   }

  ngOnInit(): void {
  }

}
