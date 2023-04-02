import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssietteComponent } from './assiette/assiette.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { RebriqueComponent } from './rebrique/rebrique.component';

const routes: Routes = [
  {path:'accueil', component:HomeComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},

  {path:'rebrique', component:RebriqueComponent},
{path:'assiette', component:AssietteComponent},
{path:'', redirectTo:'rebrique', pathMatch:'full'},
{path:'historique', component:HistoriqueComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
