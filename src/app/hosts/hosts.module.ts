import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostsComponent } from './hosts.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatCardModule,MatTabsModule,MatButtonToggleModule,MatIconModule, MatStepperModule, MatSelectModule} from '../../../node_modules/@angular/material';
import { AboutBusinessComponent } from './about-business/about-business/about-business.component';


const hostsModuleRoutes: Routes = [
  {
    path: '',
    component: HostsComponent,
    children: [
      {
        path: '', component: HostsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,MatStepperModule,MatCardModule,MatSelectModule,MatButtonModule,MatTabsModule,MatButtonToggleModule,MatIconModule,
    RouterModule.forChild(hostsModuleRoutes)
  ],
  exports: [RouterModule,MatCardModule,MatStepperModule,MatSelectModule,
    MatButtonModule,MatTabsModule,MatButtonToggleModule],
  declarations: [HostsComponent, AboutBusinessComponent]
})

export class HostsModule {

}
