import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CarsComponent } from './cars/cars.component';
import { CreateComponent } from './cars/create/create.component';
import { ReadComponent } from './cars/read/read.component';
import { UpdateComponent } from './cars/update/update.component';
import { AuthGuard } from './router-guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: CarsComponent, children: [
      { path: '', component: ReadComponent },
      { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
      { path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
