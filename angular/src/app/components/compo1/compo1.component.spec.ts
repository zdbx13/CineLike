import { ComponentFixture, TestBed } from '@angular/core/testing';

import { compo1Component } from './compo1.component';

describe('Mycompo2Component', () => {
  let component: compo1Component;
  let fixture: ComponentFixture<compo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ compo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(compo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
