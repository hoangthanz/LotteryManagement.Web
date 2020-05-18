import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login-service/login.service';
import { BaseComponentService } from 'libs/ui/src/lib/base-component.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'lottery-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseComponentService implements OnInit {
  public userName: string;
  public password: string;
  constructor(
    private loginService: LoginService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,

  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() { }

  public login() {
    // var formData: any = new FormData();
    // formData.append('UserName', this.userName);
    // formData.append('Password', this.password);
    // formData.append('RememberMe', true);

    const user = {
      userName: this.userName,
      password: this.password,
      rememberMe: true
    };
    this.loginService.login(user).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.GoTo('manager');
      },
      (error) => console.log(error)
    );
  }
}
