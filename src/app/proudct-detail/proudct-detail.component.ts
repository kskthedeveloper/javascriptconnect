import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'proudct-detail',
  templateUrl: './proudct-detail.component.html',
  styleUrls: ['./proudct-detail.component.css']
})
export class ProudctDetailComponent implements OnInit {
  @Input() product: Product;

  // @Output() onProductSelected: EventEmitter<Product>;

  constructor(private productService: ProductService) { 
    // this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void { 
    // this.onProductSelected.emit(product);
    this.productService.isSelected(product);
  }

  ngOnInit() {
  }

}
