import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './business-modules/login/login.component';
import { PageNotFoundComponent } from 'libs/ui/src/lib/page-not-found/page-not-found.component';
import { SharedModule } from './shared/modules/shared/shared.module';
import { LayoutComponent } from './business-modules/layout/layout.component';

import { RoleGuardService as RoleGuard } from './shared/services/role-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'manager',
    component: LayoutComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin',
    },
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [LoginComponent, LayoutComponent],
  imports: [RouterModule.forChild(appRoutes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
