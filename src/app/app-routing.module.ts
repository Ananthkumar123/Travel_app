import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedTitleComponent } from './animated-title/animated-title.component';
import { BookComponent } from './components/book/book.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
 
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { GetdataComponent } from './components/getdata/getdata.component';
import { TripsComponent } from './components/trips/trips.component';
import { DealsComponent } from './components/deals/deals.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'
  },
  
  {
    path:'kalki',
    component:AnimatedTitleComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
  path:'form',
  component:FormComponent
  },
  {
    path:'get',
    component:GetdataComponent
  },
  {
    path:'book',
    component:BookComponent
  },
  {
    path:'trips',
    component:TripsComponent
  },
  {
    path:'deals',
    component:DealsComponent
  },
   
  {
    path:'*',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
