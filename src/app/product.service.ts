import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {id: 1, name: "P1", price: 100, quantity: 100},
      {id: 2, name: "P2", price: 200, quantity: 200},
      {id: 3, name: "P3", price: 300, quantity: 300},
      {id: 4, name: "P4", price: 400, quantity: 400},
    ]
  }

  isSelected(product: Product) {
    console.log('Product clicked: ', product);
  }
}
