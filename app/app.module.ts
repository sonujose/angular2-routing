import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing } from './app.routes';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { CategoryComponent } from './Category/category.component';


@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [ AppComponent, HomeComponent, AboutComponent, CategoryComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
