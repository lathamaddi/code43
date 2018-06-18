import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const signinModuleRoutes: Routes = [
  {
    path: '',
    component: SigninComponent,
    children: [
      {
        path: '', component: SigninComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(signinModuleRoutes)
  ],
  exports: [RouterModule],
  declarations: [SigninComponent]
})
export class SigninModule { }
