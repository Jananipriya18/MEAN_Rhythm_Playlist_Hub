import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAdministratorDashboardComponent } from './playlist-administrator-dashboard.component';

describe('PlaylistAdministratorDashboardComponent', () => {
  let component: PlaylistAdministratorDashboardComponent;
  let fixture: ComponentFixture<PlaylistAdministratorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistAdministratorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAdministratorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
