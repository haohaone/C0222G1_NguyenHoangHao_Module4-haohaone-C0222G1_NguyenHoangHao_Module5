import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: Todo[] = [];
  content = new FormControl();
  todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.showTodoList().subscribe(value => this.todos = value);
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: ++this.todos.length,
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(
        value1 => {},
        error => {},
        () => this.ngOnInit()
      );
      this.content.reset();
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(
      value => {},
      error => {},
      () => this.ngOnInit()
    );
  }
  //
  // edit(id: number) {
  //   this.todoService.findId(id).subscribe(value => this.todo = value);
  //   this.content.patchValue(this.todo.content);
  //   this.todo.content = this.content.value;
  //   console.log(this.todo);
  //   this.todoService.updateTodo(this.todo).subscribe(
  //     value => {},
  //     error => {},
  //     () => this.ngOnInit()
  //   );
  // }
}
