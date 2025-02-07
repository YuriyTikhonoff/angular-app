import { Component, computed, signal } from '@angular/core';

import USERS from '../../constants/users';

@Component({
  selector: 'app-user-outer',
  standalone: true,
  imports: [],
  templateUrl: './user-outer.component.html',
  styleUrl: './user-outer.component.scss',
})
export class UserOuterComponent {
  users = USERS;
  userOrder = 0;
  test = 'test';
  signalizedUserOrder = signal(0);

  get user() {
    return this.users[this.userOrder];
  }
  signalizedUser = computed(() => this.users[this.signalizedUserOrder()]);

  logUser(name: string) {
    console.log('User clicked in the nested component: ', name);
  }
}
