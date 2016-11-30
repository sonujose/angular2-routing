import {Component} from '@angular/core';


@Component({
  selector: 'about',
  templateUrl: 'app/About/about.component.html'
})
export class AboutComponent {
  title: string = 'About Page';
  body:  string = 'This is the about body';
  message: string = 'You have successfully reached here';
}
