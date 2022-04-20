import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './product/add/add.component';
import { ViewComponent } from './product/view/view.component';
import { EditComponent } from './product/edit/edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterInterceptor } from './inter/inter.interceptor';
import{ToastrModule} from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    RegistrationComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot({
      maxOpened:1,
      timeOut:2000,
      positionClass: 'toast-top-right',
      preventDuplicates:true
    })
  ],
  providers: [
  {
    provide:HTTP_INTERCEPTORS,
  useClass: InterInterceptor,
multi:true
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
