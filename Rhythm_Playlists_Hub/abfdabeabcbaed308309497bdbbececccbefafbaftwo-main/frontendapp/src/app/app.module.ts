import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AddPlaylistComponent } from './components/add-playlist/add-playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewPlaylistComponent } from './components/view-playlist/view-playlist.component';
import { PlaylistAdministratorDashboardComponent } from './components/playlist-administrator-dashboard/playlist-administrator-dashboard.component';
import { CuratorDashboardComponent } from './components/curator-dashboard/curator-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AddPlaylistComponent,
    ViewPlaylistComponent,
    PlaylistAdministratorDashboardComponent,
    CuratorDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
