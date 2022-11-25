import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminProductsService } from 'src/app/services/admin/admin-products.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prod: any = {};
  loaded: boolean = false;
  selectedImage: string = '';
  selectedImageAlt: string = '';
  selectedColorCode: string = '';
  discountedPrice: number = 0;

  constructor(
    private productService: AdminProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.selectedColorCode);
  }
  id: string = '';

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('product-id') || '';

    this.productService.getProductById(this.id).then((resp) => {
      if (resp) {
        this.prod = { ...resp, techSpecs: JSON.parse(resp['techSpecs']) };
        this.selectedImage = this.prod.colors[0].image;
        this.selectedImageAlt =
          this.prod.title + ' ' + this.prod.colors[0].name;
        this.selectedColorCode = this.prod.colors[0].code;
        this.discountedPrice = Math.floor((this.prod.price / 100) * 25);
      } else {
        this.router.navigate(['/fallback']);
      }
      this.loaded = true;
    });
  }
}
