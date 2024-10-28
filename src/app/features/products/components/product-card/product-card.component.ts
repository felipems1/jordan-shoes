import { Component, computed, input } from '@angular/core';
import { Product } from '../../../../shared/interfaces/product.interface';
import { formatCurrency } from '../../../../shared/functions/formatCurrency';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  public readonly product = input.required<Product>();
  public readonly formattedPrice = computed(() => 
    formatCurrency(this.product().price)
  );
}
