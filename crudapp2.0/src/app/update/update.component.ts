import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Products: Product[] = [];
  productId: number = 0;
  product: any;

  constructor(private productService: ProductService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        this.product = product;
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

  saveUpdatedProduct(): void {
    this.productService.updateProduct(this.product).subscribe(
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
