import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdectsapiService {

  constructor(private http: HttpClient) { }

  getproducts() {
    return this.http.get('https://fakestoreapi.com/products').pipe(
      catchError(this.handleError)
    );
  }

  getProductById(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
