import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisDatosComponent } from 'src/app/components/mis-datos/mis-datos.component';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    children:[
      {
        path:'mis-datos',
        component: MisDatosComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
