import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstrelinhasComponent } from './components/estrelinhas/estrelinhas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EstrelinhasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste igt';
}
