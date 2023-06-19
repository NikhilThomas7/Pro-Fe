import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from './model/product'; 
import { Movie } from './model/movie';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8083/1.0/admin/viewAllMovies");
  }

  saveProduct(movie: Movie): Observable<any> {
    const formData = new FormData();
    formData.append('movieName', movie.movieName);
    formData.append('movieDirector', movie.movieDirector);
    formData.append('movieGenre', movie.movieGenre);
    formData.append('movieReleaseDate', movie.movieReleaseDate);
    formData.append('movieLanguage', movie.movieLanguage);
    formData.append('duration', movie.duration);
    formData.append('country', movie.country);
    formData.append('description', movie.description);
    formData.append('overallRate', movie.overallRate.toString());
    formData.append('file', movie.imageFile as Blob);
  
    return this.http.post("http://localhost:8083/1.0/admin/addMovie", formData, { responseType: 'text' });
  }
  
  

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8095/product/api.2.0/retrieve/${id}`);
  }

  deleteProductById(id: number): Observable<string> {
    const url = `http://localhost:8083/1.0/admin/deleteAMovie/${id}`;
    
    return this.http.delete<string>(url, { responseType: 'text' as 'json' });
  }
  

  // deleteProductById(id: number): Observable<any> {
  //   return this.http.delete<Product>(`http://localhost:8083/1.0/admin/deleteAMovie/${id}`);
  // }

  // deleteProductById(id: number): Observable<void> {
  //   const url = `http://localhost:8083/1.0/admin/deleteAMovie/${id}`;
    
  //   return this.http.delete<void>(url).pipe(
  //     tap(() => {
  //       // Additional operations can be performed here, such as displaying a success message or refreshing the movie list
  //       console.log('Movie deleted successfully');
  //     })
  //   );
  // }
  

  updateProduct(product: Product): Observable<Object> {
    return this.http.put("http://localhost:8095/product/api.2.0/update", product);
  }

 
}
