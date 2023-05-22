import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-task-over-view',
  templateUrl: './task-over-view.component.html',
  styleUrls: ['./task-over-view.component.scss']
})
export class TaskOverViewComponent {

  taskList : Task[] = [];

  constructor(public router : Router, public taskS : TaskManagementService){
    this.getTasks();
  }

  getTasks() : void {
    this.taskS.getTaskList().subscribe((data) => this.taskList = data);
  }



}
