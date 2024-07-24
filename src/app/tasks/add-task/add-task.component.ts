import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task';

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

  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<Task>();

  closeWindow() {
    this.closeDialog.emit(false);
  }

  onSubmit() {
    this.addTask.emit(this.task);
    this.closeWindow();
  }
}
