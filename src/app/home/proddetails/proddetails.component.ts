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

  constructor(private route: ActivatedRoute, private productsService: ProdectsapiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('id')!; // Ensure productId is being retrieved correctly
      this.loadProductDetails();
    });
  }

  loadProductDetails(): void {
    if (this.productId) {
      this.productsService.getProductById(this.productId).subscribe(
        (res) => {
          this.productDetails = res; // Handle the response here
          console.log(this.productDetails); // Check if product details are retrieved correctly
        },
        (error) => {
          console.error('Error fetching product details', error);
        }
      );
    }
  }
}
