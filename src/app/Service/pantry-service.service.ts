import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PantryServiceService {
  private apiUrl = 'http://localhost:8080/upload-pantry'; 

  constructor(private http: HttpClient) {}

  uploadPantryItems(items: any[]): Observable<any> {
    return this.http.post(this.apiUrl, items, { responseType: 'text' }).pipe(
      map(response => JSON.parse(response)) 
    );
  }
}
