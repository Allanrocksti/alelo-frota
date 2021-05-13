import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router

  beforeEach(async () => await TestBed.configureTestingModule({
    declarations: [SidebarComponent],
    imports: [
      RouterTestingModule,
      MatIconModule
    ]
  }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
  });

  it('Deve ser criado', () => expect(component).toBeTruthy());

  it('Deve checar se está navegando para uma rota', () => {
    const navigateSpy = spyOn(router, 'navigate')
    component.navigateTo('admin/dashboard')
    expect(navigateSpy).toHaveBeenCalledWith(['admin/dashboard'])
  })

  it('Deve checar se identificando uma rota', () => {
    component.routerLinkActive('/')
    expect(router.url).toBeTruthy()
  })

  it('Deve buscar nome do app', () => {
    let appName = environment.appName
    expect(component.appName).toEqual(appName);
  })
});
