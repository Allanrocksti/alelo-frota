import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingMenuMobileComponent } from './floating-menu-mobile.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FloatingMenuMobileComponent],
  imports: [CommonModule, MatIconModule],
  exports: [FloatingMenuMobileComponent],
})
export class FloatingMenuMobileModule {}
