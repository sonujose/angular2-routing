import { Component } from '@angular/core';
import { HomeComponent } from './Home/home.component'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.css']
})

export class AppComponent {
    title: string = "This is the home page"
 }
