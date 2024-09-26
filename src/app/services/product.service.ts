import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsState = signal<Product[]>([])

  constructor() {
    effect(() => {
      this.productsState.set(
        [
          { id: 1, name: "PC", price: 70, selected: false },
          { id: 2, name: "TV", price: 50, selected: true },
          { id: 3, name: "table", price: 170, selected: false },
        ]
      )
    }, { allowSignalWrites: true })
  }

  public getAllProducts() {
    return this.productsState()
  }

  public selectProduct(product: Product) {
    this.productsState.update(
      prods => prods.map(
        p => (p.id === product.id) ? {
          ...product, selected: !product.selected
        } : p
      )
    )
  }

  public deleteProduct(product: Product) {

    return this.productsState.update(
      state => state.filter(p => p.id !== product.id)
    )
  }

  public saveProduct(product: Product) {
    product.id = new Date().getTime()
    this.productsState.update(state => [...state, product])
  }


}
