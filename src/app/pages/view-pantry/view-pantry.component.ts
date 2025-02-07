import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-pantry',
  templateUrl: './view-pantry.component.html',
  styleUrl: './view-pantry.component.scss'
})
export class ViewPantryComponent {

  constructor(private router: Router){}

  pantryItems = [
    { name: 'Apple', category: 'Fruits', qty: 5, daysLeft: 10 },
    { name: 'Milk', category: 'Dairy', qty: 1, daysLeft: 3 },
    { name: 'Bread', category: 'Bakery', qty: 2, daysLeft: 0 }
  ];

  updateQuantity(item: any) {
    console.log("Updated Quantity:", item.name, "=", item.qty);
    alert(`Updated ${item.name} quantity to ${item.qty}`);
  }

  getExpiryClass(item: any): string {
    if (item.daysLeft > 7) {
      return 'green-background';
    } else if (item.daysLeft > 0 && item.daysLeft <= 7) {
      return 'amber-background'; 
    } else {
      return 'red-background'; 
    }
  }

  back()
  {
    this.router.navigate(['/dashboard'])
  }

}
