import { Component, computed } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = computed<Product[]>(() => this.productsService.getAllProducts())

  constructor(private productsService: ProductService) { }


  select(product: Product) {
    this.productsService.selectProduct(product)
  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product)
  }

}
