
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Movie } from '../model/movie';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  movie: Movie = new Movie();

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.saveProduct(this.movie).subscribe(
      () => {
        console.log('Movie added successfully');
        alert('Movie added successfully');
        this.movie = new Movie();
      },
      (error) => {
        console.error('Failed to add movie', error);
      }
    );
  }

  onImageFileChange(event: any) {
    const file = event.target.files[0];
    this.movie.imageFile = file;
  }
}

