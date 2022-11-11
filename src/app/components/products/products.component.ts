import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/products/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] | null = null;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
      console.table(this.products);
    });
  }
}
