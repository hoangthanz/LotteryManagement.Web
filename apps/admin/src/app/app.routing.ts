import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './business-modules/login/login.component';
import { PageNotFoundComponent } from 'libs/ui/src/lib/page-not-found/page-not-found.component';
import { SharedModule } from './shared/modules/shared/shared.module';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }