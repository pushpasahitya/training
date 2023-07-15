import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanaComponent } from './hana.component';

describe('HanaComponent', () => {
  let component: HanaComponent;
  let fixture: ComponentFixture<HanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
