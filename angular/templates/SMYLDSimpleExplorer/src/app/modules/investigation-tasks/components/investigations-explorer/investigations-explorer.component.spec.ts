import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationsExplorerComponent } from './investigations-explorer.component';

describe('InvestigationsExplorerComponent', () => {
  let component: InvestigationsExplorerComponent;
  let fixture: ComponentFixture<InvestigationsExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigationsExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
