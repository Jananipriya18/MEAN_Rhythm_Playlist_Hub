import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorDashboardComponent } from './curator-dashboard.component';

describe('CuratorDashboardComponent', () => {
  let component: CuratorDashboardComponent;
  let fixture: ComponentFixture<CuratorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
