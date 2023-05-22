import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOverViewComponent } from './task-over-view/task-over-view.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';

const routes: Routes = [
  {path : "home", component : TaskOverViewComponent},
  {path : "new-task", component : CreateNewTaskComponent},
  {path : "**", component : TaskOverViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
