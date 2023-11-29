import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodel';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  public totalamount:number=0;
  showproduct:any=[];
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.showproduct=res;
      this.totalamount=this.api.calculateprice();
    })
  }
  deleteitem(item:product){
    this.api.removecartitem(item);
  }
  Empty(){
    this.api.removeallitems();
  }
}
