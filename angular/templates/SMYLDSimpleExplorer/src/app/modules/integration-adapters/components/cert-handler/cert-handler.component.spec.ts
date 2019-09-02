import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertHandlerComponent } from './cert-handler.component';

describe('CertHandlerComponent', () => {
  let component: CertHandlerComponent;
  let fixture: ComponentFixture<CertHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
