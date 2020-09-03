import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ToastModule,ButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
