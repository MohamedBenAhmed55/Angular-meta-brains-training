import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
@Output() public aboutEvent = new EventEmitter()
submitEvent(){
  this.aboutEvent.emit('About Component Event')
}

}
