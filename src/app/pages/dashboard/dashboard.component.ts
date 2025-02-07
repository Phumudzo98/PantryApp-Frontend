import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router)
  {}

  addItem()
  {
    this.router.navigate(['/add-items'])
  }

  ViewPantry()
  {
    this.router.navigate(['/view-pantry'])
  }

  generateRecipe()
  {
    this.router.navigate(['/generate-recipe'])
  }

}
