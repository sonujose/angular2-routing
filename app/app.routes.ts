import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { CategoryComponent } from './Category/category.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path : 'home', component: HomeComponent },
    { path : 'about', component: AboutComponent },
    { path: 'category', component: CategoryComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [HomeComponent, AboutComponent, CategoryComponent];