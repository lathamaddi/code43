import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatButtonToggleModule, MatPaginatorModule } from '@angular/material';
import { MatCommonModule } from '@angular/material';
import { MatMenuModule, MatButtonModule, MatCheckboxModule, MatChipsModule, MatOptionModule } from '@angular/material';
import { MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatDialogModule } from '@angular/material';
import { MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertiseComponent } from './advertise.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdlibraryComponent } from './adlibrary/adlibrary.component';
import { DefineCriteriaComponent } from './defineCriteria/defineCriteria.component';
import { PlacementsComponent } from './placements/placements.component';
import { AdCreativeComponent } from './adCreative/adCreative.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';

const advertiseModuleRoutes: Routes = [
  {
    path: '',
    component: AdvertiseComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path: 'adlibrary', component: AdlibraryComponent
      },
      {
        path: 'createcampaign', component: CreateCampaignComponent,
        children: [
          {
            path: 'definecriteria', component: DefineCriteriaComponent
          },
          {
            path: 'placements', component: PlacementsComponent
          },
          {
            path: 'adcreative', component: AdCreativeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatPaginatorModule,
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
    MatListModule,
    MatStepperModule,
    RouterModule.forChild(advertiseModuleRoutes)
  ],
  exports: [RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatChipsModule,
    MatOptionModule,
    MatGridListModule,
    MatPaginatorModule,
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
  declarations: [AdvertiseComponent,
    DashboardComponent,
    AdlibraryComponent,
    DefineCriteriaComponent,
    PlacementsComponent,
    AdCreativeComponent,
    CreateCampaignComponent
]
})
export class AdvertiseModule { }
