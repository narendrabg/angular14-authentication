import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.component';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getTodos(name:string) {
    console.log(`${API_URL}/api/jpa/${name}/todos`);
    return this.http.get<Todo[]>(`${API_URL}/api/jpa/${name}/todos`);
  }

  deleteTodo(name:string,id:number) {
    return this.http.delete(`${API_URL}/api/jpa/${name}/${id}`);
  }

  updateTodo(name:string,id:number,todo:Todo) {
    return this.http.put(`${API_URL}/api/jpa/${name}/${id}`,todo);
  }

  getTodo(name:string,id:number) {
    return this.http.get<Todo>(`${API_URL}/api/jpa/${name}/${id}`);
  }

  addTodo(name:string,todo:Todo) {
    return this.http.post(`${API_URL}/api/jpa/${name}`,todo);
  }


}
