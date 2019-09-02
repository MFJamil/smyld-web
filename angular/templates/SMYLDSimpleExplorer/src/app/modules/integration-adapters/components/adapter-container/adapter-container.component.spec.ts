import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdapterContainerComponent } from './adapter-container.component';

describe('AdapterContainerComponent', () => {
  let component: AdapterContainerComponent;
  let fixture: ComponentFixture<AdapterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
