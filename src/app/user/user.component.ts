import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(private route:ActivatedRoute){}
  name=''
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

}
