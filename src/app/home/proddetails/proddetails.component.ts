import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdectsapiService } from '../../prodectsapi.service';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.scss']
})
export class ProddetailsComponent implements OnInit {
  productId: number | undefined;
  productDetails: any;
  productsBySameCategory: any[] = [];

  constructor(private route: ActivatedRoute, private productsService: ProdectsapiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('id')!;
      this.loadProductDetails();
    });
  }

  loadProductDetails(): void {
    if (this.productId) {
      this.productsService.getProductById(this.productId).subscribe(
        (res: any) => {
          this.productDetails = res;
          this.loadProductsByCategory(this.productDetails.category); // Load similar products based on category
        },
        (error) => {
          console.error('Error fetching product details', error);
        }
      );
    }
  }

  loadProductsByCategory(category: string): void {
    this.productsService.getproducts().subscribe(
      (products: any) => {
        this.productsBySameCategory = products.filter((product: any) => product.category === category && product.id !== this.productId);
      },
      (error) => {
        console.error('Error fetching products by category', error);
      }
    );
  }
}
