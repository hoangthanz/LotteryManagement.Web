import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login-service/login.service';

@Component({
  selector: 'lottery-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  public login() {
    var formData: any = new FormData();
    formData.append('UserName', this.userName);
    formData.append('Password', this.password);
    formData.append('RememberMe', true);

    this.loginService.login(formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
