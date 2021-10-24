import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCentrosEducativosRDComponent } from './Pages/api-centros-educativos-rd/api-centros-educativos-rd.component';
import { ApiHospitalesRDComponent } from './Pages/api-hospitales-rd/api-hospitales-rd.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/Home',
    pathMatch:'full'
  },
  {
    path: 'Home/api-hospitales',
     component:ApiHospitalesRDComponent,
  },
  {
    path: 'Home/api-centros-educativos',
     component:ApiCentrosEducativosRDComponent,
  },
  {
    path: '**', component:HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
