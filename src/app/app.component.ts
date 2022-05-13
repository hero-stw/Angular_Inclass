import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teachers = [
    {id: 1, name: 'Nguyen Van A', age: 40, gender: 1,avatar: 'https://source.unsplash.com/random', status: 0},
    {id: 2, name: 'Nguyen Van B', age: 21, gender: 0,avatar: 'https://source.unsplash.com/random', status: 1},
    {id: 3, name: 'Nguyen Van C', age: 30, gender: 0,avatar: 'https://source.unsplash.com/random', status: 1},
    {id: 4, name: 'Nguyen Van D', age: 35, gender: 1,avatar: 'https://source.unsplash.com/random', status: 1},
    {id: 5, name: 'Nguyen Van E', age: 26, gender: 1,avatar: 'https://source.unsplash.com/random', status: 0},
  ]
}
