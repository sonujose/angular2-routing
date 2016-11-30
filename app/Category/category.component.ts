import {Component} from '@angular/core';


@Component({
  selector: 'category',
  templateUrl: 'app/Category/category.component.html'
})
export class CategoryComponent {
  title: string = 'Category Page';
  body:  string = 'This is the Category body';
  message: string = 'Ypu have successfully reached category page';

}
