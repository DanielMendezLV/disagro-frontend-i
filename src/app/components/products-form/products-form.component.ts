import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../../interfaces/product.interface';




@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})

export class ProductsFormComponent implements OnInit {
  
  @Input() productForm!: FormGroup;
  @Input() products!: Product[];
  @Input() defaultProducts!: Product[];
  @Input() selectedProducts!: Product[];
  @Output() discountService = new EventEmitter<Number>();
  @Output() discountProduct = new EventEmitter<Number>();
  
  private addCheckboxes() {
    const formProducts = this.productForm.get('selectedProducts') as FormArray;
    this.products.forEach(() => formProducts.push(this.fb.control(false)));
  }

  onSearch(event: any){
    const input = event.target as HTMLInputElement;
    const query = input.value.toLowerCase();
    console.log(query);
    if (query) {
      this.products = this.defaultProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.products = [...this.defaultProducts];
    }
  }
  /*
  get selectedProducts(): FormArray {
    return this.productForm.get('selectedProducts') as FormArray;
  }*/

  onCheckboxChange(event: any, product: any) {
    if (event.target.checked) {
      this.selectedProducts.push(product);
    } else {
      const index = this.selectedProducts.indexOf(product);
      if (index > -1) {
        this.selectedProducts.splice(index, 1);
      }
    }
  }


  get discountServices(): Number {
    const services = this.selectedProducts.filter((product) => product.type === 2)
    const totalSum = services.reduce((accumulator, product) => accumulator + product.price, 0);

    let discount: Number = 0;

    if(services.length >= 2){
      discount = 3;
      if(totalSum >= 1500 ) {
        discount = 5;
      }
    }
    this.discountService.emit(discount);
    return discount;
  }


  get discountProducts(): Number {
    const services = this.selectedProducts.filter((product) => product.type === 1)
    let discount: Number = 0;
    if(services.length >= 3 && services.length < 5){
      discount = 3;
    }
    if(services.length >= 5){
      discount = 5;
    }
    this.discountProduct.emit(discount);
    return discount;
  }


  onSubmit() {
    console.log(this.productForm.value);
  }

  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addCheckboxes();
  }

}
