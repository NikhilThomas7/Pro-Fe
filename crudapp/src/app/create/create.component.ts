import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = new Product();
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    
  }
  

  saveProduct(){
    this.productService.saveProduct(this.product).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
      
      
  }

  onSubmit(){
    this.saveProduct();
    console.log(this.product);
  }

}
