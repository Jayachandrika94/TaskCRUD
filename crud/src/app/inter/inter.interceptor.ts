import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { ProductServiseService } from '../service/product-servise.service';

@Injectable()
export class InterInterceptor implements HttpInterceptor {

  constructor(private productService:ProductServiseService) {}

  intercept(request: HttpRequest<unknown>, handle: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifyData=request.clone({
      headers:request.headers.append(
        'authrization',
        `barear ${this.productService.gettoken()}`
      )
    })
    return handle.handle(modifyData);
  }
}
