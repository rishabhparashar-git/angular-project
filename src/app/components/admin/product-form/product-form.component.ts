import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { CategoryService } from 'src/app/services/products/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories: any;
  constructor(categoryServices: CategoryService) {
    this.categories = [];
    categoryServices.getCategories().subscribe((resp) => {
      this.categories = resp;
    });
  }

  ngOnInit(): void {}

}
