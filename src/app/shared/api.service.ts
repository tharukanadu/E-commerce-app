import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../component/product-view/productmodel';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getproduct(){
      return this.http.get<product[]>("https://dummyjson.com/products")
  }
  getproductbyid(id:string){
    return this.http.get("https://dummyjson.com/products/"+id)
  }
}
