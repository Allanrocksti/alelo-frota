
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { ReportsModule } from 'src/app/modules/reports/reports.module';
import { VehicleModule } from 'src/app/modules/vehicle/vehicle.module';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'vehicle'
      },
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule
      },
      {
        path: 'vehicle',
        loadChildren: () => VehicleModule
      },
      {
        path: 'reports',
        loadChildren: () => ReportsModule
      },
      {
        path: '',
        redirectTo: 'vehicle'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
