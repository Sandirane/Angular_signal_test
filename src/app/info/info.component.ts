import { Component, computed } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  constructor(private productService: ProductService) { }

  selectedProductsCount = computed<number>(() => {
    return this.productService
      .getAllProducts()
      .filter(p => p.selected).length

  })

  totalSelectedProducts = computed<number>(() => {
    return this.productService.getAllProducts()
      .filter(p => p.selected == true)
      .reduce((sum, current) => sum + current.price, 0)
  })

}
