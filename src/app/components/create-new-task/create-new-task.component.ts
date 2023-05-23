import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.scss']
})
export class CreateNewTaskComponent {

  taskToAdd: Task =
    new Task(0, '', '', '', 'en attente', 'moyenne', new Date(), new Date(), new Date(), '', '')

  constructor(private taskS: TaskManagementService, private route : Router) { }

  addNewTask(): void {
    this.taskS.addNewTask(this.taskToAdd).subscribe(() => {
      this.route.navigateByUrl('home')
    });
  }

}
