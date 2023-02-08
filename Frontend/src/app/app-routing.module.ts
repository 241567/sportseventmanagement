import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AddSportsComponent } from './components/add-sports/add-sports.component';
import { SportsDetailsComponent } from './components/sports-details/sports-details.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddParticipationComponent } from './components/add-participation/add-participation.component';
import { ParticipationListComponent } from './components/participation-list/participation-list.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  {path:'add',component:AddSportsComponent},
  {path:'sports',component:SportsListComponent},
  {path:'sports-details',component:SportsDetailsComponent},
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path:'events',component:EventsListComponent},
  {path:'create-events',component:CreateEventsComponent},
  {path:'events-details/:eventName',component:EventsDetailsComponent},

  {path:'create-player',component:CreatePlayerComponent},
  {path:'player',component:PlayerListComponent},
{path:'add-participation',component:AddParticipationComponent},
{path:'participation',component:ParticipationListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
