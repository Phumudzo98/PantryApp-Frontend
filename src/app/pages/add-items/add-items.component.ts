import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PantryServiceService } from '../../Service/pantry-service.service';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.scss'
})
export class AddItemsComponent {

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private pantryService: PantryServiceService) {
    this.productForm = this.fb.group({
      products: this.fb.array([this.createProduct()])
    });
  }

  get products(): FormArray {
    return this.productForm.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      productName: [''],
      quantity: [''],
      expiryDate: [''],
      category: [''],
      weight: [''],
      barcode: ['']
    });
  }

  addProduct(): void {
    this.products.push(this.createProduct());
  }

  returnHome()
  {
    this.router.navigate(['/dashboard'])
  }

  removeProduct(index: number): void {
    this.products.removeAt(index);
  }

  onSubmit(): void {
    const formData = this.productForm.value.products; 
    console.log('Submitting:', formData);

    this.pantryService.uploadPantryItems(formData).subscribe({
      next: (response) => {
        console.log('Success:', response);
        alert('Products added successfully!');
        this.productForm.reset(); 
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Failed to add products.');
      }
    });
  }

  back()
  {
    this.router.navigate(['/dashboard'])
  }

}
