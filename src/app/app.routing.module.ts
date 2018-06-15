import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HostsComponent } from './hosts/hosts.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    { path: 'main', component: MainComponent },
    { path: 'hosts', component: HostsComponent },
    { path: 'advertise', component: AdvertiseComponent },
    { path: 'agencies', component: AgenciesComponent },
    { path: 'signin', component: SigninComponent },
    { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
