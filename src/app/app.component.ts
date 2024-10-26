import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productService } from './services/product.service';
import { BestSalesComponent } from './components/best-sales/best-sales.component';
import { ProductComponent } from './components/product/product.component';
import { Observable } from 'rxjs';
import { Product } from './model/product.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BestSalesComponent, ProductComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  productService = inject(productService);
  products$!: Observable<Product[]>;
  colors = [
    '#FF8B64',
    '#55C2E6',
    '#FF5E7D',
    '#FF8B64',
    '#55C2E6',
    '#4bcf82',
    '#7335D2',
    '#F1C75B',
    '#4bcf82',
    '#7335D2',
  ];

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
