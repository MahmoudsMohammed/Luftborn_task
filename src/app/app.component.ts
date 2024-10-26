import {
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productService } from './services/product.service';
import { BestSalesComponent } from './components/best-sales/best-sales.component';
import { ProductComponent } from './components/product/product.component';
import { fromEvent, map, Observable, tap } from 'rxjs';
import { Product } from './model/product.model';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BestSalesComponent,
    ProductComponent,
    AsyncPipe,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('nav') nav!: ElementRef;
  render = inject(Renderer2);
  productService = inject(productService);
  products$!: Observable<Product[]>;
  loading: boolean = true;
  toggle = true;
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
  screenResize$ = fromEvent(window, 'resize');

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    setTimeout(() => {
      this.loading = false;
    }, 2500);
    this.screenResize$
      .pipe(
        map((e) => (e.target as Window).innerWidth),
        tap((w) => {
          if (w > 767) {
            this.render.setStyle(this.nav.nativeElement, 'display', 'block');
            this.toggle = false;
          }
        })
      )
      .subscribe();
  }

  onToggle() {
    if (this.toggle) {
      this.render.setStyle(this.nav.nativeElement, 'display', 'block');
    } else {
      this.render.setStyle(this.nav.nativeElement, 'display', 'none');
    }
    this.toggle = !this.toggle;
  }
}
