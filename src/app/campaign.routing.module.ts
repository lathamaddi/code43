// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { PersonalComponent } from './personal/personal.component';
// import { WorkComponent } from './work/work.component';
// import { AddressComponent } from './address/address.component';
// import { ResultComponent } from './result/result.component';

// import { WorkflowGuard } from './workflow/workflow-guard.service';
// import { WorkflowService } from './workflow/workflow.service';


// export const campaignRoutes: Routes = [
//     { path: 'personal',  component: PersonalComponent },
//     { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
//     { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
//     { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
//     { path: '',   redirectTo: '/personal', pathMatch: 'full' },
//     { path: '**', component: PersonalComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(campaignRoutes, { useHash: true} )],
//   exports: [RouterModule],
//   providers: [WorkflowGuard]
// })

// export class CampaignRoutingModule {

// }
