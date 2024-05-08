import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './shared/grid/grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-test';
}
