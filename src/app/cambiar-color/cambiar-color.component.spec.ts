import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarColorComponent } from './cambiar-color.component';

describe('CambiarColorComponent', () => {
  let component: CambiarColorComponent;
  let fixture: ComponentFixture<CambiarColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
