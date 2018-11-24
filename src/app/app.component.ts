import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  obj = {
    id: '1',
    name: 'das'
  };

  arr = ['abc', 'def', 'hihi'];
  istrue = false;

  name = 'abc';

  itemList = ['Angular 4', 'React', 'JSf', 'React Native'];






}
