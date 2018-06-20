import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostsComponent } from './hosts.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MatButtonModule,MatCardModule,MatTabsModule,MatButtonToggleModule,MatIconModule} from '../../../node_modules/@angular/material';

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
    CommonModule,MatCardModule,MatButtonModule,MatTabsModule,MatButtonToggleModule,MatIconModule,
    RouterModule.forChild(hostsModuleRoutes)
  ],
  exports: [RouterModule,MatCardModule,MatButtonModule,MatTabsModule,MatButtonToggleModule],
  declarations: [HostsComponent]
})

export class HostsModule {

}
