import { Component } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';

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
  shortarr = [4, 2, 8, 9, 7, 6];
  form;
  pushToItemList = function() {
    if (this.name != '') {
      this.itemList.push(this.name);
      this. name = '';
    }
  };

  deleteItemList = function (index) {
    this.itemList.splice(index, 1);

  };

  ConvertToInt = function(val) {
    return parseInt(val);
  };

  ngOnInit () {
    this.form = new FormGroup({
      lastname: new FormControl('' , Validators.compose([Validators.required,
      Validators.minLength(3),
      Validators.pattern('[\\w\\-\\s\\/]+')]) ),
      firstname: new FormControl(' ', this.textValidator),
      lanuage: new FormControl(''),
    });
  }

  textValidator(control){
    if(control.value.length<3){
      return {'firstname': true};
    }
  }





  onSubmit = function (user) {
    console.log(user);

  };

}
