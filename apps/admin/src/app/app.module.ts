import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/services/interceptor.service';
import { BaseComponentService } from 'libs/ui/src/lib/base-component.service';
import { ToastrModule } from 'ngx-toastr';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot(),

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [],
        blacklistedRoutes: [],
        skipWhenExpired: true,
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    BaseComponentService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {
  constructor(router: Router) {}
}
