import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  filterForm = new FormGroup ({
    filter: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
