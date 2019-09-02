import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1ExplorerComponent } from './module1-explorer.component';

describe('Module1ExplorerComponent', () => {
  let component: Module1ExplorerComponent;
  let fixture: ComponentFixture<Module1ExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1ExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1ExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
