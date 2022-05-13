import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
 
  constructor() {
    this.src = '',
    this.age = 0
   }

  ngOnInit(): void {
  }
  @Input('source')  src :string;
  @Input('age') age : number;

}
