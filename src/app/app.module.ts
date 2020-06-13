import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomMaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelBankComponentComponent } from './model-bank-component/model-bank-component.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    ModelBankComponentComponent,
    LoginComponent,
    UserComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    // MatDatepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
