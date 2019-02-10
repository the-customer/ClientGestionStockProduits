import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  {path:'produit', component: ProduitComponent},
  {path:'dashboard', component: DashboardComponent},
  //{path:'', component: DashboardComponent}, //Permet d'appeler un composant par defaut mais ne changer pas l'url
  {path:'', redirectTo:'/dashboard', pathMatch:'full'}, // Permet de rediger par defaut quelques part
];

@NgModule({
  imports: [
      RouterModule.forRoot(
          appRoutes,
          {enableTracing: true}//Pour afficher dans la console le l'historique de navigation
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
