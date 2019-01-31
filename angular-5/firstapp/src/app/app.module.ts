import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouteparamsdemoComponent } from './routeparamsdemo/routeparamsdemo.component';
import { UserService } from './user.service';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './http-demo/in-memory-data.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    RouteparamsdemoComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    HttpDemoComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
