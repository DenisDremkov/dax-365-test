import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dax365-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required]) 
    });
  }

  login(): void {
    if (this.formGroup.valid) {
      
    }
  }
}
