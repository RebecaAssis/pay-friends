import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperComponent } from './steper.component';

describe('SteperComponent', () => {
  let component: SteperComponent;
  let fixture: ComponentFixture<SteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
