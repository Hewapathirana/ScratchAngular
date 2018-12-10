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
  name = '';
  itemList = ['Angular 4', 'React', 'JSf', 'React Native'];
  school = 'Isipathana';
  day = new Date();


  pushToItemList = function() {
    if (this.name != '') {
      this.itemList.push(this.name);
      this. name = '';
    }
  };

  deleteItemList = function (index) {
    this.itemList.splice(index, 1);

  };

  ConvertToInt(val) {
    return parseInt(val);
  }

}
