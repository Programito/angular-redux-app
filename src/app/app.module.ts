import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import {AppRoutingModule} from './app-routing.module';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';

// Environment
import {environment} from '../environments/environment';

// ngrx
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// Modulos personalizados
import { AuthModule } from './auth/auth.module';
// import {SharedModule} from './shared/shared.module';
// import {IngresoEgresoModule} from './ingreso-egreso/ingreso-egreso.module';

// Graficas
// import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
// import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
// import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { OrdenIngresoEgresoPipe } from './ingreso-egreso/orden-ingreso-egreso.pipe';
// import { environment } from '../environments/environment.prod';





@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    // DashboardComponent,
    // IngresoEgresoComponent,
    // EstadisticaComponent,
    // DetalleComponent,
    // FooterComponent,
    // NavbarComponent,
    // SidebarComponent,
    // OrdenIngresoEgresoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    // SharedModule,
    // IngresoEgresoModule,
    // FormsModule,
    // ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ingreso-egreso-app'),
    AngularFirestoreModule,
    // AngularFireAuthModule,
    // ChartsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
