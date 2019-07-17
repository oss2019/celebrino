import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ClubRegistrationComponent } from './clubs/club-registration/club-registration.component';
import { HeaderComponent } from './header/header.component';
import { ClubListComponent } from './clubs/club-list/club-list.component';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CodingClubComponent } from './clubs/coding/coding.component';
import { SportsClubComponent } from './clubs/sports/sports.component';
import { ArtClubComponent } from './clubs/art/art.component';
import { AstronomyClubComponent } from './clubs/astronomy/astronomy.component';
import { RoboticsClubComponent } from './clubs/robotics/robotics.component';
import { MusicClubComponent } from './clubs/music/music.component';
import { PhotographyClubComponent } from './clubs/photography/photography.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubRegistrationComponent,
    HeaderComponent,
    ClubListComponent,
    HomeComponent,
    CodingClubComponent,
    SportsClubComponent,
    ArtClubComponent,
    AstronomyClubComponent,
    RoboticsClubComponent,
    MusicClubComponent,
    PhotographyClubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
