import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Response } from '../model/model.module';
import { ProductServiseService } from '../service/product-servise.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm!:FormGroup

  constructor(private fb:FormBuilder,private registerService:ProductServiseService,private toastr:ToastrService,private router:Router) { 
    this.registerForm=this.fb.group({
      fullname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
  }

submit(){
console.log(this.registerForm.value);
this.registerService.register(this.registerForm.value).subscribe((res)=>{
  if(!res.error){
    this.router.navigate(['/log'])
    this.toastr.success(res.meesage);


  }else{
    this.toastr.error(res.meesage)
  }
  
},error=>{
  if(error.status){
    this.toastr.error(error.error.meesage);
  }else{
    this.toastr.error("connnection error");
  }
})

// return this.http.post<{
//   error:boolean,
//   meggage:string,
//   response:Response
// }>(`${environment.baseUrl}/auth/register`,this.registerForm.value).subscribe(data=>{
//     console.log(data);
// })
}



}
