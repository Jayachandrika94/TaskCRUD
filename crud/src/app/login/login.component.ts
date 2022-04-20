import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ProductServiseService } from '../service/product-servise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  constructor(private fb:FormBuilder, private productService:ProductServiseService,private toastr:ToastrService, private rote:Router) { 
    this.loginForm=this.fb.group({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),

    })
  }

  ngOnInit(): void {
  }

  login(){
    this.loginForm.value
    console.log( this.loginForm.value);
    this.productService.login(this.loginForm.value).subscribe(data=>{
      if(!data.error){
        console.log(data);
        localStorage.setItem('token',data.token);
        this.toastr.success('success');
        this.rote.navigate(['/view'])
      }else{
        this.toastr.error('error');
      }
      },error=>{
      if(error.status){
        this.toastr.error(error.error.meesage);
      }else{
        this.toastr.error("connection error");
      }
     
    })
    
    
  }
 
}
