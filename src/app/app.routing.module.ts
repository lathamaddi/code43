import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MatCardModule } from '../../node_modules/@angular/material';

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    { path: 'main', component: MainComponent },
    {
        path: 'hosts',
        loadChildren: './hosts/hosts.module#HostsModule',
        data: { title: 'Hosts', preload: true }
    },
    {
        path: 'advertise',
        loadChildren: './advertise/advertise.module#AdvertiseModule',
        data: { title: 'Advertise', preload: true }
    },
    {
        path: 'agencies',
        loadChildren: './agencies/agencies.module#AgenciesModule',
        data: { title: 'Agencies', preload: true }
    },
    {
        path: 'signin',
        loadChildren: './signin/signin.module#SigninModule',
        data: { title: 'SignIn', preload: true }
    },
    {
        path: 'signup',
        loadChildren: './signup/signup.module#SignUpModule',
        data: { title: 'signup', preload: true }
    },
    { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
          useHash: true
        }),
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule 
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
