import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GRCDComponent } from './grcd.component';

describe('GRCDComponent', () => {
  let component: GRCDComponent;
  let fixture: ComponentFixture<GRCDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GRCDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GRCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
