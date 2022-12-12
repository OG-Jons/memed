import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  registerForm: FormGroup;
  fieldRequired = "This field is required"

  constructor(private auth: AuthService) {
    this.registerForm = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required]),
        'displayname': new FormControl('display name', [Validators.required]),
        'password': new FormControl(null, [Validators.required, this.checkPassword]),
      }
    )
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required]),
        'displayname': new FormControl('display name', [Validators.required]),
        'password': new FormControl(null, [Validators.required, this.checkPassword]),
      }
    )
  }

  checkPassword(control: any) {
    const enteredPassword = control.value
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  getErrorPassword() {
    return this.registerForm?.get('password')?.hasError('required') ? 'This field is required (The password must be at least six characters, one uppercase letter and one number)' :
      this.registerForm?.get('password')?.hasError('requirements') ? 'Password needs to be at least six characters, one uppercase letter and one number' : '';
  }

  checkValidation(input: string) {
    return this.registerForm?.get(input)?.invalid && (this.registerForm.get(input)?.dirty || this.registerForm.get(input)?.touched);
  }

  onSubmit(formData: FormGroup, formDirective: FormGroupDirective, type: 'register' | 'login'): void {
    if (type === 'register') {
      const displayname = formData.value.displayname;
      const password = formData.value.password;
      const username = formData.value.username;
      this.auth.register(username, displayname, password);
      formDirective.resetForm();
      this.registerForm?.reset();
      return;
    } else if (type === 'login') {
      const password = formData.value.password;
      const username = formData.value.username;
      this.auth.login(username, password);
      formDirective.resetForm();
      this.registerForm?.reset();
    }
  }

}
