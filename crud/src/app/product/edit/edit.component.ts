import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductServiseService } from 'src/app/service/product-servise.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productEdit!:FormGroup
  id: any;
  product: any;
  selectId: any;

  constructor(private productService:ProductServiseService, private fb:FormBuilder, private route:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public editData:any, private closeMat:MatDialogRef<EditComponent>,
    private toast:ToastrService) {
    this.productEdit=this.fb.group({
      productName:new FormControl('',[Validators.required]),
      productPrice:new FormControl('',[Validators.required]),
      productImageURL:new FormControl('',[Validators.required]),
      productDescription:new FormControl('',[Validators.required]),
    })
   }
  ngOnInit(): void {
   this.id=this.route.snapshot.params['i']
   console.log(this.id);
   this.productService.getProduct().subscribe(data=>{
     console.log(data);
    this.product=data.products
console.log(this.product);

for(let d of this.product){
  console.log(d);
  if(this.id===d._id){
    console.log('hi',d);
    this.selectId=d
  }
}
   })

// dialogBox
if(this.editData){
  this.productEdit.controls['productName'].setValue(this.editData.productName);
  this.productEdit.controls['productPrice'].setValue(this.editData.productPrice);
  this.productEdit.controls['productImageURL'].setValue(this.editData.productImageURL);
  this.productEdit.controls['productDescription'].setValue(this.editData.productDescription);

}

  }

  EditProduct(){
this.productService.upDate(this.editData._id,this.productEdit.value).subscribe(data=>{
  console.log(data);
  if(!data.error){
    this.toast.success(data.messages)
    this.closeMat.close('update')
  }else{
    this.toast.error(data.messages)
  }
},error=>{
  if(error.status){
    this.toast.error(error.error.message)
  }else{
    this.toast.error('network_erro')
  }
})

  }

}
