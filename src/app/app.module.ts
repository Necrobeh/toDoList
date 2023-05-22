import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOverViewComponent } from './task-over-view/task-over-view.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskOverViewComponent,
    CreateNewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
