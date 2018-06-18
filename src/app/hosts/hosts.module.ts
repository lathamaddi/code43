import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostsComponent } from './hosts.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    CommonModule,
    RouterModule.forChild(hostsModuleRoutes)
  ],
  exports: [RouterModule],
  declarations: [HostsComponent]
})

export class HostsModule {

}
