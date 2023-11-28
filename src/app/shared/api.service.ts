import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../component/product-view/productmodel';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemlist:any=[];
  public productlist = new BehaviorSubject <any>([])
  constructor(private http:HttpClient) { }

  getproduct(){
      return this.http.get<product[]>("https://dummyjson.com/products")
  }
  getproductbyid(id:string){
    return this.http.get("https://dummyjson.com/products/"+id)
  }
  addtocart(data:product){
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist)
  }
  products(){
    return this.productlist.asObservable();
  }
  removecartitem(data:product){
    this.cartitemlist.map((a:product,index:product)=>{
      if(data.id === a.id){
        this.cartitemlist.splice(index,1)
      }
    })
    this.productlist.next(this.cartitemlist);
  }
}
