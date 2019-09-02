import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2ContainerComponent } from './module2-container.component';

describe('Module2ContainerComponent', () => {
  let component: Module2ContainerComponent;
  let fixture: ComponentFixture<Module2ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
