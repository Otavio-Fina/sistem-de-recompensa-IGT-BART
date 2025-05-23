import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private readonly router: Router){}

  navigateBalatro(){
    this.router.navigate(['IGT'])
  }

  navigateBalloon(){
    this.router.navigate(['BART'])
  }
}
