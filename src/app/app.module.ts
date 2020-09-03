import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ToastModule,ButtonModule, 
  RouterModule.forRoot([
     {path:'', component: LoginComponent}
  ])],
  declarations: [AppComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
