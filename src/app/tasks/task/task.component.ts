import { Component, Input, output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
