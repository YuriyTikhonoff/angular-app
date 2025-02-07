import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './components/my-component/mycomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-ng-app';
}
