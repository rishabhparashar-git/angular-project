import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminProductsService } from 'src/app/services/admin/admin-products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  availableProducts: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: AdminProductsService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((resp) => {
      this.availableProducts = Object.entries(resp);
    });
  }

  goToForm(id: any) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
