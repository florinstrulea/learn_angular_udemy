import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task';
import { TasksService } from '../task/tasks.service';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  task: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
  };

  private taskService = inject(TasksService);

  @Output() closeDialog = new EventEmitter<boolean>();
  @Input({ required: true }) userId!: string;

  closeWindow() {
    this.closeDialog.emit(false);
  }

  onSubmit() {
    this.task.userId = this.userId;
    this.taskService.addTask(this.task);
    this.closeWindow();
  }
}
