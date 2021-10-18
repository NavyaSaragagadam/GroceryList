import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: [
      '../assets/css/bootstrap.min.css'
  ]
})

export class GroceryComponent {
  task: any = {
    name: '',
    id: 0
  };
  tasks: any = [];
 
  onClick(){
    this.tasks.push({name: this.task.name, id: new Date().getTime()});
    this.task = {
      name: '',
      id: 0
    };  
  }
}