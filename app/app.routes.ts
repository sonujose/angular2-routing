import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { CategoryComponent } from './Category/category.component';

const appRoutes: Routes = [
    { path : 'home', component: HomeComponent },
    { path : 'about', component: AboutComponent },
    { path : 'category', component: CategoryComponent}
]

export const routing = RouterModule.forRoot(appRoutes)