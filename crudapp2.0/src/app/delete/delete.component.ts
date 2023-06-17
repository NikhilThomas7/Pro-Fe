import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId: number = 0;
  product: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.productService.deleteProductById(this.productId).subscribe(
      (response) => {
        console.log('Product deleted successfully');
      },
      (error) => {
        console.log('Error deleting product:', error);
      }
    );
  }
}
