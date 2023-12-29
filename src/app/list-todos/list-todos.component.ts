import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  todos:Todo[]=[];
  errorMessage='';
  message ="";
  
  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.getTodos('naren@123.com').subscribe(
      data => {
        this.todos =data;
      },
      error => {
        this.errorMessage=error.error.message;
      }
      
    )
  }

  handleDelete(id:number) {
    this.todoService.deleteTodo('naren@123.com',id).subscribe(
      data => {
        this.message="deleted successfully";
        this.refreshTodos();
      }
    )

  }

  handleUpdate(id:number) {
    this.router.navigate(['todo',id]);
  }

  addData() {
    this.router.navigate(['todo',-1]);
    //this.todoService.addTodo('naren@123.com',this.todo);
  }

}

export class Todo {
  constructor(public id:number,public description:string,public isComplete:boolean,public targetDate: Date) {

  }
}
