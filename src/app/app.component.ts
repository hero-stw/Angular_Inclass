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
  showItem = (object : Teacher)=> {
    console.log('Hello');
    console.log('Clicked ',object);
  }
  buttonState = true;
  newTeacher = {
     id: '',
     name: '',
     age: '',
     gender: '',
     avatar: '',
     status: '',
  }
  toggleState() {
    this.buttonState = !this.buttonState
  }
  handleInput(event: any, key: 'name' | 'age' | 'gender'|'avatar'|'status') {
    this.newTeacher[key] = event.target.value;
  }
  onSubmit() {
    this.teachers.push( {
      ...this.newTeacher,
      id: this.teachers.length + 1,
      name: this.newTeacher.name,
      age: +this.newTeacher.age,
      gender: +this.newTeacher.gender,
      avatar: 'https://source.unsplash.com/random',
      status: +this.newTeacher.status,
    });
    console.log(this.newTeacher);
    this.newTeacher = {
      id: '',
      name: '',
      age: '',
      gender: '',
      avatar: '',
      status: '',
   }
  }
  fileToUpload: File | null = null;
  handleFileInput(event:any) {
    this.fileToUpload = event.target.files.item(0);
    console.log(this.fileToUpload?.name);
    
  }
  // uploadFileToActivity() {
  //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     }, error => {
  //       console.log(error);
  //     });
  // }
}
export type Teacher = {
  id: number | string,
  name: string,
  age: number,
  gender: number,
  avatar: string,
  status: number
}
