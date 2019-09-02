import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCertComponent } from './new-cert.component';

describe('NewCertComponent', () => {
  let component: NewCertComponent;
  let fixture: ComponentFixture<NewCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
