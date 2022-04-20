import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductServiseService } from 'src/app/service/product-servise.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
getData:any;
  constructor(private productService:ProductServiseService, private http:HttpClient, public dialoug:MatDialog) { 
    this.gettingData()
  }

  ngOnInit(): void {
   
  }

  gettingData(){
    this.productService.getProduct().subscribe(data=>{
      this.getData=data.products
      console.log(this.getData);
    })
  }

  delete(id:any){
this.productService.deleteProduct(id).subscribe(data=>{
  console.log(data);
  this.gettingData()
})
}
editProduct(value: any){
const dialogRef= this.dialoug.open(EditComponent,{
  height:'70%',
  width:'50%',
  data:value
});
dialogRef.afterClosed().subscribe(res=>{
  console.log(`Dialog result: ${res}`);
  if(res === 'update'){
    this.gettingData()
  }
})

}

}
