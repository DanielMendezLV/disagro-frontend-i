import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'frontend';
  questionForm!: FormGroup;
  productsForm!: FormGroup;
  selecteProducts: Product[] = [];
  discountProduct: Number = 0;
  discountService: Number = 0;

  products: Product[] = [];


  constructor(private builder: FormBuilder, private productService: ProductService){
    this.createForms();
  }

  private createForms(): void {

    this.productsForm = this.builder.group({
      selectedProducts: this.builder.array([])
    });

    this.questionForm = this.builder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.productService.getProducts().subscribe((result) => {
      this.products = result.data;
    });
  }

  onSaveDiscountProduct(event: any){
    this.discountProduct = event;
  }

  onSaveDiscountService(event:any){
    this.discountService = event;
  }

  onSubmit() {
    if (this.questionForm.invalid) {
      return;
    }
    const { name, lastname, email, date } = this.questionForm.value;
   
    this.productService.submit(
      {
        user: { name, lastname, email, date },
        discounts: { discountService: this.discountService, discountProduct: this.discountProduct },
        products : this.selecteProducts
      }
     ).subscribe((result) => {
      
      this.productsForm.reset();
      this.questionForm.reset();
      this.selecteProducts = [];

      Swal.fire({
        title: "Tu asistencia fue registrada correctamente",
        text: "",
        icon: "success"
      });
      
      // this.fetchData();
    })
  }


}
