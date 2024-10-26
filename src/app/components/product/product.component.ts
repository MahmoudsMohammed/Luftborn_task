import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Input({ required: true }) color!: string;
}
