import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  movie: Movie = new Movie();
  Products: Product[] = [];
  movieId: number = 0;
  product: Product = new Product();

  constructor(private productService: ProductService,private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit(): void {
      this.movieId = this.route.snapshot.params['id'];
      this.productService.getProductById(this.movieId).subscribe(
        (product) => {
          this.product=product;          
        },
        (error) => {
          console.log('Error retrieving product:', error);
        }
      );
    }

  getProducts(){
    this.router.navigate(['/retrieve']);
  }

  // getProducts(): void {
  //   this.productService.getProducts().subscribe((Products) => {
  //     this.Products = Products;
  //   });
  // }

  // retrieveProductById(): void {
  //   this.productService.getProductById(this.productId).subscribe(
  //     (product) => {
  //       this.product = product;
  //     },
  //     (error) => {
  //       console.log('Error retrieving product:', error);
  //     }
  //   );
  // }

  onImageFileChange(event: any) {
    const file = event.target.files[0];
    this.movie.imageFile = file;
  }

  saveUpdatedProduct(): void {
     this.movie.movieName = this.product.movieName;
          this.movie.movieDirector = this.product.movieDirector;
          this.movie.movieGenre = this.product.movieGenre;
          this.movie.movieReleaseDate = this.product.movieReleaseDate;
          this.movie.movieLanguage = this.product.movieLanguage;
          this.movie.duration = this.product.duration;
          this.movie.country = this.product.country;
          this.movie.description = this.product.description;
          this.movie.overallRate = this.product.overallRate;

    this.productService.updateProduct(this.movie,this.movieId).subscribe(
      (response) => {
        console.log('Product updated successfully');
        this.getProducts();
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    );
  }
  }

