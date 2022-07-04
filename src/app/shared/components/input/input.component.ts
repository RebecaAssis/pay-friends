import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  @Input() inputFormGroup: FormGroup;
  @Input() inputFormControlName;
  passwordHidden: boolean = true; 
  @Input() srcPaths: string[];
  src: string = '../../../../assets/icons/visibility-off.svg';

  constructor() {
  }

  ngOnInit(): void { 
  }

  showPassword() {
    this.passwordHidden = !this.passwordHidden;
    
    if(this.passwordHidden) {
      this.src = this.srcPaths[0];
      this.type = 'password'
    } else {
      this.src = this.srcPaths[1];
      this.type = 'text';
    }
  }

}
