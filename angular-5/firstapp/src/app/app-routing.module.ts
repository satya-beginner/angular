import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouteparamsdemoComponent } from './routeparamsdemo/routeparamsdemo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'routeparamsdemo/:id', component: RouteparamsdemoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
