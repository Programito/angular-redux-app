import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { dashboardRoutes } from './dashboard/dashboard.routes';
import { AuthGuardService } from './auth/auth-guard.service';

// loadChildren en lazy
const routes: Routes = [
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 /*{
     path: '',
     component: DashboardComponent,
     children: dashboardRoutes,
     canActivate: [AuthGuardService]
  },*/
  {
      path: '',
      loadChildren: './ingreso-egreso/ingreso-egreso.module#IngresoEgresoModule',

  },
 {path: '**', redirectTo: ''}
];


@NgModule({

    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})


export class AppRoutingModule {}
