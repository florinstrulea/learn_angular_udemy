import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../interfaces/task';
import { CommonModule } from '@angular/common';
import { User } from '../interfaces/user';
import { AddTaskComponent } from './add-task/add-task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  showAddTasks: boolean = false;
  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  onDeleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  get userTasks(): Task[] {
    return this.tasks!.filter((task) => task.userId === this.user?.id);
  }

  addTask() {
    this.showAddTasks = true;
  }

  closeDialog(isClosed: boolean) {
    this.showAddTasks = isClosed;
  }

  createTask(task: Task) {
    let taskToAdd = task;
    if (this.user?.id) {
      taskToAdd.userId = this.user?.id;
    }
    this.tasks.push(taskToAdd);
  }
}
