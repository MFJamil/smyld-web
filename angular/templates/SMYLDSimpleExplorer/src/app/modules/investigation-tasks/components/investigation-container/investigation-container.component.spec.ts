import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationContainerComponent } from './investigation-container.component';

describe('InvestigationContainerComponent', () => {
  let component: InvestigationContainerComponent;
  let fixture: ComponentFixture<InvestigationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
