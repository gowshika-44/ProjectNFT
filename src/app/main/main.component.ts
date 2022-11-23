import { Component, OnInit } from '@angular/core';
import { Inputclass } from '../inputclass';
import { InputsService } from '../inputs.service';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  varpro:string=''
  getdet:Inputclass[]=[]
  constructor(private routea:ActivatedRoute,
              private route:Router,
              private inpserve:InputsService,
              private auth:AuthService) { }

  ngOnInit(): void {
    this.routea.params.subscribe(params=>{
      if(params['varpro']){
        this.getdet=this.inpserve.Prodetails().filter(getdet=>getdet.Name.toLowerCase().includes(params['varpro'].toLowerCase()))
      }else{
        this.getdet=this.inpserve.Prodetails()
      }
    })
  }
  profile(){
    this.route.navigateByUrl('/'+'profile');
  }
  searchById(){
    console.log('Searching....')
    this.route.navigateByUrl('/search/'+this.varpro)
  }
  
  // minus(pro:any){
  //     if(pro.Like !=1){
  //       pro.Like -= 1;
  //       pro.Price=(pro.Like*pro.Total)
  //     }
  // }
  plus(pro:any)
  {
        if(pro.Like !=5){
          pro.Like +=1;
        pro.Price=(pro.Like*pro.Total)
    }
  }
  cartnum:number=0;
   itemCart:any=[];
  AddCart(carts:any){
    
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storeDataGet:any=[];
      storeDataGet.push(carts);
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
    }
    else{
      var id = carts.ID;
      let index:number =-1;
      this.itemCart = JSON.parse(localStorage.getItem('localCart')!);
      for(let i=0; i<this.itemCart.length; i++){
        if(parseInt(id) === parseInt(this.itemCart[i].ID)){
          this.itemCart[i].Quantity= carts.Quantity;
          index = i;
          break;
        }
      }
      if(index == -1){
        
        this.itemCart.push(carts);
        localStorage.setItem('localCart',JSON.stringify(this.itemCart));
      }
      else{
        localStorage.setItem('localCart',JSON.stringify(this.itemCart));
      }
    }
    this.cartNumberFunc();
  }
  cartNumber:number=0;
  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber=cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
  cartnav(){
    this.route.navigateByUrl('/'+'cart');
  }
}
