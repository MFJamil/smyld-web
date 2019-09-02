import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesContainerComponent } from './changes-container.component';

describe('ChangesContainerComponent', () => {
  let component: ChangesContainerComponent;
  let fixture: ComponentFixture<ChangesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
