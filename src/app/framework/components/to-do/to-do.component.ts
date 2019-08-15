import { Component, OnInit } from '@angular/core';
import { transition , keyframes, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],  animations: [
    trigger('moveInLeft', [
       transition('void=> *', [style({transform: 'translateX(300px)'}),
         animate(200, keyframes([
          style({transform: ' translateX(300px)'}),
          style({transform: ' translateX(0)'})

           ]))]),


           transition('*=>void', [style({transform: 'translateX(0px)'}),
         animate(100, keyframes([
          style({transform: 'translateX(0px)'}),
          style({transform: 'translateX(300px)'})

           ]))])

      ])

   ]
})

export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  todoArray = [];
  todo;

addTodo(value) {
    if (value !== '') {
     this.todoArray.push(value);

  } else {
    alert('Field required **');
  }

  }
/*delete item*/
  deleteItem(todo) {
   for (let i = 0 ; i <= this.todoArray.length ; i++) {
    if (todo === this.todoArray[i]) {
     this.todoArray.splice(i, 1);
    }
   }
  }
// submit Form
  todoSubmit(value: any) {
     if ( value !== '') {
    this.todoArray.push(value.todo);
    } else {
      alert('Field required **');
    }

  }
}
