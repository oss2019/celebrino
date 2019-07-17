import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubListComponent } from './clubs/club-list/club-list.component';
import { ClubRegistrationComponent } from './clubs/club-registration/club-registration.component';
import { HomeComponent } from './home/home.component';
import { ArtClubComponent } from './clubs/art/art.component';
import { AstronomyClubComponent } from './clubs/astronomy/astronomy.component';
import { CodingClubComponent } from './clubs/coding/coding.component';
import { MusicClubComponent } from './clubs/music/music.component';
import { PhotographyClubComponent } from './clubs/photography/photography.component';
import { RoboticsClubComponent } from './clubs/robotics/robotics.component';
import { SportsClubComponent } from './clubs/sports/sports.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-clubs', component: ClubListComponent },
  { path: 'create', component: ClubRegistrationComponent },
  { path: 'coding', component: CodingClubComponent },
  { path: 'robotics', component: RoboticsClubComponent },
  { path: 'sports', component: SportsClubComponent },
  { path: 'photography', component: PhotographyClubComponent },
  { path: 'astronomy', component: AstronomyClubComponent },
  { path: 'music', component: MusicClubComponent },
  { path: 'art', component: ArtClubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
