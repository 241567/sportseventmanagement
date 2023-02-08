import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { AddSportsComponent } from './components/add-sports/add-sports.component';
import { SportsDetailsComponent } from './components/sports-details/sports-details.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { ParticipationListComponent } from './components/participation-list/participation-list.component';
import { AddParticipationComponent } from './components/add-participation/add-participation.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddSportsComponent,
    SportsDetailsComponent,
    SportsListComponent,
    CreateEventsComponent,
    EventsListComponent,
    EventsDetailsComponent,
    CreatePlayerComponent,
    PlayerListComponent,
    ParticipationListComponent,
    AddParticipationComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
