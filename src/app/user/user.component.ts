import {
  Component,
  ElementRef,
  computed,
  signal,
  Input,
  input,
  EventEmitter,
  Output,
  output,
} from '@angular/core';
import { DUMMY_USERS as importedUsers } from './../dummy-users';
import { CommonModule } from '@angular/common';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user?: User;
  @Input() selectedUser?: User;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  @Output() select = new EventEmitter<string>();
  //select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  //imagePath = 'assets/users/' + this.avatar;
  //   importedUsers[Math.floor(Math.random() * importedUsers.length)]
  // );
  // get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  onSelectUser() {
    // this.selectedUser.set(
    //   importedUsers[Math.floor(Math.random() * importedUsers.length)]
    // );
    this.select.emit(this.user?.id);
  }
}
