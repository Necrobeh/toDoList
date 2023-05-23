import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  baseUrl : string = 'http://localhost:8080/task';

  constructor(private http : HttpClient) { }

  getTaskList() : Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/getAll`);
  }

  getTaskById(taskId : number) : Observable<Task>{
    return this.http.get<Task>(`${this.baseUrl}/get/${taskId}`)
  }

  addNewTask(content : Task) : Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/add`, content)
  }
}
