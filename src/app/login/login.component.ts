import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  LoginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // login(){
  //   this.http.get<any>("http://localhost:3001/tekteams/user/signup").subscribe(res=>{
  //     const user =res.find ( (a:any)=>{
  //       return a.email ===this.LoginForm.value.email && a.password ===this.LoginForm.value.password
  //     })
  //     if(user){
  //       alert("login successfully")
  //       this.LoginForm.reset();
  //       this.router.navigate(["dashboard"])

  //     }else{
  //       alert("something went wrong")
  //     }
  //   })
  // }

  login() {
    this.http
      .post<any>(
        'http://localhost:3001/tekteams/user/login',
        this.LoginForm.value
      )
      .subscribe(
        (res) => {
          alert('Login successfully');
          this.router.navigate(['dashboard']);
        },
        (err) => {
          alert('Please enter correct credential');
        }
      );
  }
}
