import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private auth:AuthService,
              private route:Router) { }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }
  getCartDetails:any=[];
  CartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails =JSON.parse(localStorage.getItem('localCart')!);
      console.log(this.getCartDetails);
    }
  }
  incQnt(ProID:any,Quantity:any){
    for(let i=0; i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].prodId  === ProID){
      if(Quantity != 5)
      this.getCartDetails[i].Quantity = parseInt(Quantity) + 1;
  }
}
localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
this.loadCart();
}
decQnt(ProID:any, Quantity:any){
  for(let i=0; i<this.getCartDetails.length; i++){
    if(this.getCartDetails[i].prodId === ProID){
      if(Quantity != 1)
      this.getCartDetails[i].Quantity = parseInt(Quantity) - 1;
  }
  }
  localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
  this.loadCart();
  }
total:number = 0;
loadCart(){
if(localStorage.getItem('localCart')){
  this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
  this.total = 
  this.getCartDetails.reduce(function(acc:any , val:any){
    return acc + (val.Price * val.Quantity);
    }, 0);
}
}
removeall(){
  localStorage.removeItem('localCart');
  this.getCartDetails = [];
  this.total = 0;
  this.cartNumber = 0;
  this.auth.cartSubject.next(this.cartNumber);
  }
  singleDelete(getCartDetail:any){
    console.log(getCartDetail);
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for(let i=0; i<this.getCartDetails.length; i++){
        if(this.getCartDetails[i].ID === getCartDetail){
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFunc();
        }
      }
    }
  }
    
cartNumber:number = 0;
cartNumberFunc(){
var cartValue = JSON.parse(localStorage.getItem('localCart')!);
this.cartNumber = cartValue.length;
this.auth.cartSubject.next(this.cartNumber);
}
checkout(){
  this.route.navigateByUrl('/'+'check');
}
}