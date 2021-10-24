import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ApiHospitalesRDComponent } from './Pages/api-hospitales-rd/api-hospitales-rd.component';
import { ApiCentrosEducativosRDComponent } from './Pages/api-centros-educativos-rd/api-centros-educativos-rd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApiHospitalesRDComponent,
    ApiCentrosEducativosRDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
