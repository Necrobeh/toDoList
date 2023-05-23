import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskManagementService } from 'src/app/services/task-management.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {

  idFound : any = 0;
  taskFound : Task = new Task(0,'','','','','',new Date(), new Date(), new Date,'','');

  constructor(private route : ActivatedRoute, private taskS : TaskManagementService){

    this.searchForId();
    this.taskS.getTaskById(this.idFound).subscribe((data)=>this.taskFound = data);
    
  }

  searchForId() : void {
    this.route.paramMap.subscribe((param)=>{
      this.idFound = param.get('id');
    })
}
}
