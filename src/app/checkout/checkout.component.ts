import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  last(){
    this.route.navigateByUrl('/'+'last');
  }
}
