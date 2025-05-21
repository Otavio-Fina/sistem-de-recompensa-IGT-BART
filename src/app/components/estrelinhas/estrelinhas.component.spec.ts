import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelinhasComponent } from './estrelinhas.component';

describe('EstrelinhasComponent', () => {
  let component: EstrelinhasComponent;
  let fixture: ComponentFixture<EstrelinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstrelinhasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrelinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
