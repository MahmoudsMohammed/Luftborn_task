import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productService } from './services/product.service';
import { BestSalesComponent } from './components/best-sales/best-sales.component';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BestSalesComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  productService = inject(productService);
}
