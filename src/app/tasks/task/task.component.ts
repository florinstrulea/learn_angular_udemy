import { Component, Input, output } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  delete = output<string>();
  deleteTask() {
    this.delete.emit(this.task?.id);
  }
}
