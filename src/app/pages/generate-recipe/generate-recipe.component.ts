
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-generate-recipe',
  templateUrl: './generate-recipe.component.html',
  styleUrl: './generate-recipe.component.scss'
})
export class GenerateRecipeComponent{

  recipeText: string = ''; 
  loading: boolean = false; 
  apiUrl: string = 'http://localhost:8080/generate'; 

  constructor(private http: HttpClient) {}

  generateRecipe() {
    this.loading = true;
    this.recipeText = "Generating recipe...";
  
    this.http.get<{ generated_text: string }[]>(this.apiUrl).subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.recipeText = response[0].generated_text; 
        } else {
          this.recipeText = "No recipe generated. Try again.";
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching recipe:', error);
        this.recipeText = "Failed to generate recipe. Please try again.";
        this.loading = false;
      }
    });
  }
  

}
