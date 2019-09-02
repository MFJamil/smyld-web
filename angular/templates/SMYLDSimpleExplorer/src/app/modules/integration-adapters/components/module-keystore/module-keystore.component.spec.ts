import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleKeystoreComponent } from './module-keystore.component';

describe('ModuleKeystoreComponent', () => {
  let component: ModuleKeystoreComponent;
  let fixture: ComponentFixture<ModuleKeystoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleKeystoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleKeystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
