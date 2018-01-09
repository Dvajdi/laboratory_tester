import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrifugeComponent } from './centrifuge.component';

describe('CentrifugeComponent', () => {
  let component: CentrifugeComponent;
  let fixture: ComponentFixture<CentrifugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrifugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrifugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
