import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousExplorerComponent } from './miscellaneous-explorer.component';

describe('MiscellaneousExplorerComponent', () => {
  let component: MiscellaneousExplorerComponent;
  let fixture: ComponentFixture<MiscellaneousExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
