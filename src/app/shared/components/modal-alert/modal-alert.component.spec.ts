import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlertComponent } from './modal-alert.component';

describe('ModalAlertComponent', () => {
  let component: ModalAlertComponent;
  let fixture: ComponentFixture<ModalAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser criado', () => expect(component).toBeTruthy());

  it('Deve ser chamado a emissão do botão dismiss', () => {
    const dismissSpy = spyOn(component.eventDismiss, 'emit')
    component.dismiss();
    expect(dismissSpy).toHaveBeenCalledWith('')
  })

  it('Deve ser chamado a emissão do botão confirm', () => {
    const confirmSpy = spyOn(component.eventConfirm, 'emit')
    component.confirm();
    expect(confirmSpy).toHaveBeenCalledWith('')
  })
});
