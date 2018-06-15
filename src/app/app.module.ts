import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { MatCommonModule } from '@angular/material';
import { MatMenuModule, MatButtonModule, MatCheckboxModule, MatChipsModule, MatOptionModule } from '@angular/material';
import { MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatDialogModule } from '@angular/material';
import { MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './main/main.component';
import { HostsComponent } from './hosts/hosts.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HostsComponent,
    AdvertiseComponent,
    AgenciesComponent,
    SigninComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatOptionModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatChipsModule,
    MatOptionModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
