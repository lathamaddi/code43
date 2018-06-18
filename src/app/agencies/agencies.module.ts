import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesComponent } from './agencies.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const agenciesModuleRoutes: Routes = [
  {
    path: '',
    component: AgenciesComponent,
    children: [
      {
        path: '', component: AgenciesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(agenciesModuleRoutes)
  ],
  exports: [RouterModule],
  declarations: [AgenciesComponent]
})

export class AgenciesModule { }
