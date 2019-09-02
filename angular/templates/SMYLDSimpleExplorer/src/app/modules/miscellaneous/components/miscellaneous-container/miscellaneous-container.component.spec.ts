import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousContainerComponent } from './miscellaneous-container.component';

describe('MiscellaneousContainerComponent', () => {
  let component: MiscellaneousContainerComponent;
  let fixture: ComponentFixture<MiscellaneousContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
