import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FloatingMenuMobileComponent } from './floating-menu-mobile.component';

describe('FloatingMenuMobileComponent', () => {
  let component: FloatingMenuMobileComponent;
  let fixture: ComponentFixture<FloatingMenuMobileComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingMenuMobileComponent],
      imports: [
        RouterTestingModule,
        MatIconModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
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
});
