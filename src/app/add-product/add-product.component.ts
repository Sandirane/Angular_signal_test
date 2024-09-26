import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup

  constructor(private fb: FormBuilder, private productService: ProductService) { }


  ngOnInit() {
    this.productForm = this.fb.group({
      name: this.fb.control(''),
      price: this.fb.control(0),
      selected: this.fb.control(false)
    })
  }

  saveProduct() {
    let product: Product = {
      id: 0,
      name: this.productForm.value.name,
      price: parseFloat(this.productForm.value.price),
      selected: this.productForm.value.selected
    }
    this.productService.saveProduct(product)
  }

}
