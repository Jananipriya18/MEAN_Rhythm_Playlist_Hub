import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddProductComponent } from './components/add-playlist/add-playlist.component';
import { PublisherDashboardComponent } from './components/publisher-dashboard/publisher-dashboard.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { BuyerDashboardComponent } from './components/buyer-dashboard/buyer-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'publisher-dashboard' ,component: PublisherDashboardComponent },
  { path: 'buyer-dashboard' ,component: BuyerDashboardComponent},
  { path: 'add-product', component: AddProductComponent }, // Add this route
  { path: 'view-product', component: ViewProductComponent }, // Add this route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
