import { Component } from '@angular/core';
import { UserComponent } from '../app-user/user.component';
import { UserOuterComponent } from '../app-user-outter/user-outer.component';

@Component({
  selector: 'my-component',
  standalone: true,
  imports: [UserComponent, UserOuterComponent],
  templateUrl: './mycomponent.component.html',
  styleUrl: './mycomponent.component.scss',
})
export class MyComponent {}
