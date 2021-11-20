import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetarianoComponent } from './vegetariano.component';

describe('VegetarianoComponent', () => {
  let component: VegetarianoComponent;
  let fixture: ComponentFixture<VegetarianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetarianoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetarianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
