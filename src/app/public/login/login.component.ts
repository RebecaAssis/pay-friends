import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  srcPaths: string[] = ['../../../../assets/icons/visibility-off.svg', '../../../../assets/icons/visibility.svg'];

  constructor() { }

  ngOnInit(): void {
  }

}
