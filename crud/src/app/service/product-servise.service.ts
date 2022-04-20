import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../model/model.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiseService {

  constructor(private http:HttpClient) { }
// get
getProduct(){
  return this.http.get<{
    error:boolean,
    message:string,
    products:Product[]
  }>('https://ty-shop.herokuapp.com/api/products')
}

// add
addData(product:Product){
  return this.http.post<{
    error:boolean,
    messages:string,
    products:Product
  }>('https://ty-shop.herokuapp.com/api/products',product)
}

// put
upDate(id:any,product:Product){
  return this.http.put<{
    error:boolean,
    messages:string,
    products:Product
  }>(`https://ty-shop.herokuapp.com/api/products/${id}`,product)
}


// delete

deleteProduct(id:any){
  return this.http.delete(`https://ty-shop.herokuapp.com/api/products/${id}`)

}
register(data:any){
  return this.http.post< {
    error:boolean,
    meesage:string,
    response:Response[]}>(`${environment.baseUrl}/auth/register`,data)
}


login(data:any){
  return this.http.post<{
    error:boolean,
    token:string,
    meggage:string,
    response:Response[]
  }>(`${environment.baseUrl}/auth/login`,data)
 
}
gettoken(){
  return  localStorage.getItem('token') 
}

}
