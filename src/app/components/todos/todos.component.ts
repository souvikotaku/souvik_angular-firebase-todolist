import { Component, OnInit } from '@angular/core';
import firebase from './../../util/firebase';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [];

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    const todoRef = firebase.database().ref('TodoAngular');

    todoRef.on('value', (snapshot) => {
      // console.log(snapshot.val());

      const todos = snapshot.val();
      const todoList = [];

      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }

      console.log(todoList);

      this.todos = todoList;
    });
  }

  toggleDone(id: number, v) {
    this.todos.map((v, i) => {
      if (i == id) {
        if (v.completed) {
          v.completed = false;
        } else {
          v.completed = true;
        }
      }
    });
  }

  deleteTodo(id) {
    const todoRef = firebase
      .database()
      .ref('TodoAngular')
      .child(this.todos[id].id);
    todoRef.remove();

    // this.todos = this.todos.filter((v, i) => i != id);
  }

  addTodo() {
    const todoRef = firebase.database().ref('TodoAngular');

    const todo = {
      content: this.inputTodo === '' ? 'NA' : this.inputTodo,
      completed: false,
    };

    todoRef.push(todo);

    // this.todos.push({
    //   content: this.inputTodo,
    //   completed: false,
    // });

    this.inputTodo = '';
  }
}
