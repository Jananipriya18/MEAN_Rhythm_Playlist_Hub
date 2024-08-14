import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddPlaylistComponent } from './components/add-playlist/add-playlist.component';
import { PlaylistAdministratorDashboardComponent } from './components/playlist-administrator-dashboard/playlist-administrator-dashboard.component';
import { ViewPlaylistComponent } from './components/view-playlist/view-playlist.component';
import { CuratorDashboardComponent } from './components/curator-dashboard/curator-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'playlist-administrator-dashboard' ,component: PlaylistAdministratorDashboardComponent },
  { path: 'curator-dashboard' ,component: CuratorDashboardComponent},
  { path: 'add-playlist', component: AddPlaylistComponent }, // Add this route
  { path: 'view-playlist', component: ViewPlaylistComponent }, // Add this route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
