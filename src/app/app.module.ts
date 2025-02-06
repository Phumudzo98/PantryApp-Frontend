import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewPantryComponent } from './pages/view-pantry/view-pantry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemsComponent } from './pages/add-items/add-items.component';
import { GenerateRecipeComponent } from './pages/generate-recipe/generate-recipe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    ViewPantryComponent,
    AddItemsComponent,
    GenerateRecipeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
