import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMasterComponent } from './boton-master.component';

describe('BotonMasterComponent', () => {
  let component: BotonMasterComponent;
  let fixture: ComponentFixture<BotonMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
