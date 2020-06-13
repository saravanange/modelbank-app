import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ModelBankComponentComponent } from './model-bank-component/model-bank-component.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
      

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path:'**', redirectTo:'dashboard'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
