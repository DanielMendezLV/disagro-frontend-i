import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IGetProduct } from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root',
})
/* It makes requests to the server to get the survey data and the configuration for
the survey, and then it stores the data in the store */
export class ProductService {

  constructor(private http: HttpClient) { }

  submit(data: any) {
    const url = environment.buildEndpoint('disagro',['event','register']);
    return this.http.post<any>(
      url,
      {  ... data },
    );
  }

  getProducts() {
    const url = environment.buildEndpoint('disagro',['products']);
    return this.http.get<IGetProduct>(
      url
    );
  }


}
