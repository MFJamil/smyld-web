import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2ExplorerComponent } from './module2-explorer.component';

describe('Module2ExplorerComponent', () => {
  let component: Module2ExplorerComponent;
  let fixture: ComponentFixture<Module2ExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2ExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2ExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
