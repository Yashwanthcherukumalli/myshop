// src/app/home/productscards/productscards.component.ts
import { Component, OnInit } from '@angular/core';
import { ProdectsapiService } from '../../prodectsapi.service';
import { Router } from '@angular/router';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-productscards',
  templateUrl: './productscards.component.html',
  styleUrls: ['./productscards.component.scss'],
})
export class ProductscardsComponent implements OnInit {
  productslist: any[] = [];
  filteredProducts: any[] = [];

  constructor(
    private productsService: ProdectsapiService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.productsService.getproducts().subscribe((data: any) => {
      this.productslist = data;
      this.filteredProducts = data; // Initialize with all products
    });

    this.searchService.searchTerm$.subscribe((searchTerm) => {
      this.filterProducts(searchTerm);
    });
  }

  filterProducts(searchTerm: string) {
    this.filteredProducts = this.productslist.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  onImageError(event: any) {
    event.target.src = 'assets/fallback-image.png'; // Specify your fallback image path here
  }

  productdetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
