import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  srcPaths: string[] = ['../../../../assets/icons/visibility-off.svg', '../../../../assets/icons/visibility.svg'];

  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  });

  userAccount;
  

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value)

    this.authenticationService.getUser().subscribe((dados) => {
      this.userAccount = dados;
      console.log(this.userAccount)
    });
    
    
  }

}
