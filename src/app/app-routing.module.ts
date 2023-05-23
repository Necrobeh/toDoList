import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOverViewComponent } from './components/task-over-view/task-over-view.component';
import { CreateNewTaskComponent } from './components/create-new-task/create-new-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
  {path : "home", component : TaskOverViewComponent},
  {path : "new-task", component : CreateNewTaskComponent},
  {path : "details/:id", component : TaskDetailsComponent},
  {path : "**", component : TaskOverViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
