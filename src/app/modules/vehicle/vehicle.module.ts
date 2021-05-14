import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehicleRoutingModule } from './vehicle.routing';
import { ApiModule } from 'src/app/shared/api/api.module';
import { MatIconModule } from '@angular/material/icon';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  declarations: [VehicleComponent, VehicleEditComponent, ModalAlertComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    ApiModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class VehicleModule {}
