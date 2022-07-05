import { LocalStorageService } from './services/local-storage.service';
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
  loginDataInserted;
  authentication: boolean = false;
  

  constructor(private authenticationService: AuthenticationService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }
  
  checkLoginData(dados) {
    for (let key in dados) {
      if(dados[key].email === this.loginDataInserted.email && dados[key].password === this.loginDataInserted.password) {
        this.authentication = true;

      } else {
        this.authentication = false;
      }
    }
  }
  
  saveAuthentication() {
    this.localStorageService.set('authentication', this.authentication);
  }

  onSubmit() {
    this.loginDataInserted = this.loginForm.value;
    
    this.authenticationService.getUser().subscribe((dados) => {
      this.checkLoginData(dados); 
      this.saveAuthentication();
    });
  }

  
}
