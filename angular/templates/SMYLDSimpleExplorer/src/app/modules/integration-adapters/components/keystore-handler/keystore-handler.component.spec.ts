import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeystoreHandlerComponent } from './keystore-handler.component';

describe('KeystoreHandlerComponent', () => {
  let component: KeystoreHandlerComponent;
  let fixture: ComponentFixture<KeystoreHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeystoreHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeystoreHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
