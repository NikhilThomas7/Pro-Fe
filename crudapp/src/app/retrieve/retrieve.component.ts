import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  Products: Product[] = [];
  selectedProduct: Product | undefined;

  // constructor(private service: ProductService) {}
  constructor(private service:ProductService,private router: Router){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProducts().subscribe((Products) => {
      this.Products = Products;
    });
  }

  deleteProduct(productId: number): void {
    this.service.deleteProductById(productId).subscribe(() => {
      this.getProducts();
    });
  }
  updateProduct(id:number){
    this.router.navigate(['update', id]);
  }

  selectProduct(product: Product): void {
    this.selectedProduct = { ...product };
  }

  saveUpdatedProduct(): void {
    if (this.selectedProduct) {
      this.service.updateProduct(this.selectedProduct).subscribe(() => {
        this.getProducts();
        this.selectedProduct = undefined;
      });
    }
  }
}
