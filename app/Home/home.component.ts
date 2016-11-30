import {Component} from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: 'app/Home/home.component.html'
})
export class HomeComponent {
  title: string = 'Home Page';
  body:  string = 'This is the home body';
  message: string = 'You have successfully reached here';

}
