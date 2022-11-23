import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LastComponent } from './last/last.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'sign',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'main',component:MainComponent},
  {path:'search/:varpro',component:MainComponent},
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'check',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'last',component:LastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
