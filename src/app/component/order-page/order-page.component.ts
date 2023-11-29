import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit{
  public totalamount:number=0;
  constructor(private api:ApiService,private router:Router){}
  ngOnInit(): void {
    setTimeout(()=>{
        this.router.navigate(["/"])
    },4000);
      this.totalamount=this.api.calculateprice();
  }

}
