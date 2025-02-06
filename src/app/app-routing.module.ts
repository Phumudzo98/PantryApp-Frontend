import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewPantryComponent } from './pages/view-pantry/view-pantry.component';
import { AddItemsComponent } from './pages/add-items/add-items.component';
import { GenerateRecipeComponent } from './pages/generate-recipe/generate-recipe.component';

const routes: Routes = [


  {path:'', component:LandingPageComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'view-pantry', component: ViewPantryComponent},
  {path:'add-items', component: AddItemsComponent},
  {path:'generate-recipe', component: GenerateRecipeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
