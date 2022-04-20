import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiseService } from 'src/app/service/product-servise.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productDetails!:FormGroup

  constructor(private productService:ProductServiseService, private fb:FormBuilder) {
    this.productDetails=this.fb.group({
      productName:new FormControl('',[Validators.required]),
      productPrice:new FormControl('',[Validators.required]),
      productImageURL:new FormControl('',[Validators.required]),
      productDescription:new FormControl('',[Validators.required]),
    })
   }

  

  ngOnInit(): void {
  }

  submit(){
    console.log(this.productDetails.value);
  this.productService.addData(this.productDetails.value).subscribe(data=>{
    console.log(data);
    this.productDetails.reset()
  })
  
}



}
