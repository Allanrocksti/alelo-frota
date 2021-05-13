import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HeaderService } from '../../services/header.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let headerService: HeaderService;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    headerService = TestBed.inject(HeaderService)
  });

  it('Deve Ser Criado', () => expect(component).toBeTruthy());

  it('Deve buscar nome do app', () => {
    let appName = environment.appName
    expect(component.appName).toEqual(appName);
  })

  it('Deve escutar alterações do título e subtítulo', () => {
    setAndTestHeader('test-title', 'test-subtitle')
    setAndTestHeader('test-title2', 'test-subtitle2')
  })

  function setAndTestHeader(title: string, subtitle: string) {
    headerService.title = title
    headerService.subtitle = subtitle

    expect(component.title).toEqual(title)
    expect(component.subtitle).toEqual(subtitle)
  }
});
