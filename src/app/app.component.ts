import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mohamed';
  email = 'mohamed@gmail.com';
  public data = '';
  myEvents(name: any) {
    alert(name);
    // this.data = "This is a Event handler"
  }

  // dataarray = ['Bike', 'Cycle', 'Car', 'Skooty'];
  dataarray = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      age: 30,
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      gender: 'Female',
      age: 28,
    },
    {
      name: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      gender: 'Male',
      age: 35,
    },
    {
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      gender: 'Female',
      age: 26,
    },
    {
      name: 'William Brown',
      email: 'william.brown@example.com',
      gender: 'Male',
      age: 40,
    },
  ];
  loginsucc:any = false
  colorChoice = ''
  colorSelection(color:any){
    this.colorChoice = color.target.value
  }

}
