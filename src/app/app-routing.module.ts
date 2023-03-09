import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './landing/details/details.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'weather-details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
