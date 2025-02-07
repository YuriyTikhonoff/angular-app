import { Component, computed, signal } from '@angular/core';

import USERS from '../../constants/users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  users = USERS;
  userOrder = 0;
  signalizedUserOrder = signal(0);
  get usersText() {
    return `Users: ${this.users.length}`;
  }
  get user() {
    return this.users[this.userOrder];
  }
  signalizedUser = computed(() => this.users[this.signalizedUserOrder()]);

  onUserClick() {
    const newUserOrder = (this.userOrder + 1) % 3;
    this.userOrder = newUserOrder;
    this.signalizedUserOrder.set(newUserOrder);
  }
  logUser(name: string) {
    console.log('User clicked in the nested component: ', name);
  }
}
