import { Component, Input, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../interfaces/task';
import { CommonModule } from '@angular/common';
import { User } from '../interfaces/user';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './task/tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  private taskService = inject(TasksService);
  @Input({ required: true }) user?: User;
  showAddTasks: boolean = false;

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.user?.id!);
  }
  addTask() {
    this.showAddTasks = true;
  }

  closeDialog(isClosed: boolean) {
    this.showAddTasks = isClosed;
  }
}
