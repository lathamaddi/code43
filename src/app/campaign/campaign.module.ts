import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MatToolbarModule, MatStepperModule } from '@angular/material';
import { MatCommonModule } from '@angular/material';
import { MatMenuModule, MatButtonModule, MatCheckboxModule, MatChipsModule, MatOptionModule } from '@angular/material';
import { MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatDialogModule } from '@angular/material';
import { MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CreateCampaignComponent } from './create-campaign.component';




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
    MatListModule,MatStepperModule,
    CommonModule,
    RouterModule.forChild(createModuleRoutes),
  ],
  exports: [RouterModule, 
    FormsModule,
    
    MatToolbarModule,
    MatCommonModule,
    MatMenuModule,
    MatStepperModule,
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
  declarations: [CreateCampaignComponent]
})
export class CampaignModule { }
