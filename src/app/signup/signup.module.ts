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
import { SignupComponent } from './signup.component';



const signupModuleRoutes: Routes = [
  {
    path: '',
    component: SignupComponent,
    children: [
      {
        path: '', component: SignupComponent
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
    RouterModule.forChild(signupModuleRoutes),
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
  declarations: [SignupComponent]
})
export class SignUpModule { }
