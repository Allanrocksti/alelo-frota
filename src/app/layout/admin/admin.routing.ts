
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'vehicle'
    //   },
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => DashboardModule
    //   },
    //   {
    //     path: 'vehicle',
    //     loadChildren: () => ChampionshipModule
    //   },
    //   {
    //     path: 'reports',
    //     loadChildren: () => TeamsModule
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
