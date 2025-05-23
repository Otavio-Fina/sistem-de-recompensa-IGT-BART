import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IGTComponent } from './igt.component';

describe('IGTComponent', () => {
  let component: IGTComponent;
  let fixture: ComponentFixture<IGTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IGTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IGTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
