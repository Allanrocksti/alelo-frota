import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { HeaderFilterModule } from 'src/app/shared/components/header-filter/header-filter.module';
import { FloatingMenuMobileModule } from 'src/app/shared/components/floating-menu-mobile/floating-menu-mobile.module';

@NgModule({
  declarations: [AdminComponent, HeaderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    MatIconModule,
    HeaderFilterModule,
    FloatingMenuMobileModule,
  ],
  exports: [MatIconModule],
})
export class AdminModule {}
