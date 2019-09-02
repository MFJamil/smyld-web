import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1ContainerComponent } from './module1-container.component';

describe('Module1ContainerComponent', () => {
  let component: Module1ContainerComponent;
  let fixture: ComponentFixture<Module1ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
