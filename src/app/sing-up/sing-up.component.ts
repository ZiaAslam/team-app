import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

 singUpForm !:FormGroup
 submitted=false
  constructor(
    private formBuilder:FormBuilder,
     private http:HttpClient ,
     private router:Router
     
    ) { }

  ngOnInit(): void { 
    this.singUpForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]

    })
  }
  singUp(){
    this.http.post<any>("http://localhost:3001/tekteams/user/signup",this.singUpForm.value ).subscribe(res=>{
      if (this.singUpForm.invalid){
        return
      }
      window. alert("singUP Successfully");
      this.singUpForm.reset();
      this.router.navigate(['Login'])
    })
  }

}
