import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number = 0;
  name:string='';
  todo:Todo | any= {};

  constructor(private todoService: TodoDataService,
     private route:ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id !==-1) {
    this.todoService.getTodo('naren@123.com',this.id).subscribe(data => { 
    this.todo = data
    console.log(this.todo);
  });
}
  }

  saveTodo(){
    if(this.id === -1) {    
      console.log(this.todo);
      this.todoService.addTodo('naren@123.com',this.todo);
    } else {
    this.todoService.updateTodo('naren@123.com',this.id,this.todo).subscribe(
      data => {
        this.todo = data
      this.router.navigate(['todos'])
      }
    )
  }
}
 

}
