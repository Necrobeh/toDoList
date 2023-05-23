import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOverViewComponent } from './components/task-over-view/task-over-view.component';
import { CreateNewTaskComponent } from './components/create-new-task/create-new-task.component';
import { BackToHomeComponent } from './components/back-to-home/back-to-home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskOverViewComponent,
    CreateNewTaskComponent,
    BackToHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
