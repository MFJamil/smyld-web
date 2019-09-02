import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationAdaptersExplorerComponent } from './explorer.component';

describe('ExplorerComponent', () => {
  let component: IntegrationAdaptersExplorerComponent;
  let fixture: ComponentFixture<IntegrationAdaptersExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationAdaptersExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationAdaptersExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
