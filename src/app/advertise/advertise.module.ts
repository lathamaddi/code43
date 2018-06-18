import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertiseComponent } from './advertise.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const advertiseModuleRoutes: Routes = [
  {
    path: '',
    component: AdvertiseComponent,
    children: [
      {
        path: '', component: AdvertiseComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(advertiseModuleRoutes)
  ],
  exports: [RouterModule],
  declarations: [AdvertiseComponent]
})
export class AdvertiseModule { }
