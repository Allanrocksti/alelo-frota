import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFilterComponent } from './header-filter.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) | null = null;

@NgModule({
  declarations: [HeaderFilterComponent],
  imports: [CommonModule, MatIconModule, FormsModule, NgxMaskModule.forRoot()],
  exports: [HeaderFilterComponent],
})
export class HeaderFilterModule {}
