import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  srcPaths: string[] = ['../../../../assets/icons/visibility-off.svg', '../../../../assets/icons/visibility.svg'];
  user = [];

  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  });
  

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.push(this.loginForm.value);
    console.log(this.user)

    this.authenticationService.getUser().subscribe((dados) => console.log(dados));
  }

}
