import { Component, signal } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  public readonly products = signal<Product[]>([])

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products.set(data)
    })
  }
}
