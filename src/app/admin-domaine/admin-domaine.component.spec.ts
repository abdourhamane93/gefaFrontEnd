import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDomaineComponent } from './admin-domaine.component';

describe('AdminDomaineComponent', () => {
  let component: AdminDomaineComponent;
  let fixture: ComponentFixture<AdminDomaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
