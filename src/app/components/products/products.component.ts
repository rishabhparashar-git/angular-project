import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  colors: any;
  constructor(private products: ProductsService) {}

  ngOnInit(): void {
    this.products.getProducts().subscribe((resp) => {
      this.colors = resp;
      console.log(this.colors);
    });
  }
}
