import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: compo1Component
  },
  {
    path:'register',
    component: Compo2Component
  },
  {
    path: '**',//cuando el usuario se equivoque con la ruta
    component: PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
