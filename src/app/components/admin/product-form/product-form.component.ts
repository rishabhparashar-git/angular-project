import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminProductsService } from 'src/app/services/admin/admin-products.service';
import { CategoryService } from 'src/app/services/products/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories: any;
  currentProduct: any = {
    title: '',
    price: '',
    category: '',
    imageUrl: '',
  };
  constructor(
    private categoryServices: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private productService: AdminProductsService
  ) {
    //getting categories
    this.categories = [];
    this.categoryServices.getCategories().subscribe((resp) => {
      this.categories = resp;
    });

    //getting query param
    let id = this.route.snapshot.paramMap.get('product-id');

    //getting current product
    this.productService.getAllProducts().subscribe((resp) => {
      const availableProducts = Object.entries(resp);
      availableProducts.forEach((prod) => {
        if (prod[0] === id) {
          this.currentProduct = { id: prod[0], ...prod[1] };
        }
      });
      console.log(this.currentProduct);
    });
  }

  ngOnInit(): void {}

  save(form: any) {
    this.router.navigate(['/admin/products']);
    console.log(form);
  }
}
