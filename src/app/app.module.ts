import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { ReadComponent } from './cars/read/read.component';
import { CreateComponent } from './cars/create/create.component';
import { UpdateComponent } from './cars/update/update.component';
import { DatePipe } from '@angular/common';
import { LoadingService } from './services/loading.service';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingComponent } from './loading/loading.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './router-guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsComponent,
    ReadComponent,
    CreateComponent,
    UpdateComponent,
    LoadingComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
