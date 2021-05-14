
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehicleComponent } from './vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleComponent
  },
  {
    path: 'register',
    component: VehicleEditComponent
  },
  {
    path: 'register/:id',
    component: VehicleEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
