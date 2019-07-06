import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'proudct-detail',
  templateUrl: './proudct-detail.component.html',
  styleUrls: ['./proudct-detail.component.css']
})
export class ProudctDetailComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
