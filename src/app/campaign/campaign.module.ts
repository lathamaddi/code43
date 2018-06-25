import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MatToolbarModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatCommonModule } from '@angular/material';
import { MatMenuModule, MatButtonModule, MatCheckboxModule, MatChipsModule, MatOptionModule } from '@angular/material';
import { MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatDialogModule } from '@angular/material';
import { MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CreateCampaignComponent } from './create-campaign.component';
import { PlaceCampaignComponent } from './place-campaign/place-campaign.component';




const createModuleRoutes: Routes = [
  {
    path: '',
    component: CreateCampaignComponent,
    children: [
      {
        path: '', component: CreateCampaignComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    MatTabsModule,
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
    MatTabsModule,MatDatepickerModule,
    MatListModule,MatStepperModule,MatNativeDateModule,
    CommonModule,
    RouterModule.forChild(createModuleRoutes),
  ],
  exports: [RouterModule, 
    FormsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatCommonModule,MatNativeDateModule,
    MatMenuModule,
    MatStepperModule,MatTabsModule,
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
    MatTabsModule,MatSnackBarModule,
    MatListModule],
  declarations: [CreateCampaignComponent, PlaceCampaignComponent]
})
export class CampaignModule { }
