import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { 
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

  // productWasSelected(product: Product): void {
  //   console.log('Product clicked: ', product);
  // }

}
