import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Import HttpClientModule here
  providers: [ApiService], // Provide ApiService in the component
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      (response: any) => {
        console.log('API response:', response);
        this.products = response?.products ?? [];
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
