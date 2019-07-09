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

@NgModule({
  declarations: [
    AppComponent,
    ClubRegistrationComponent,
    HeaderComponent,
    ClubListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
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
