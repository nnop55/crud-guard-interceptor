import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  tmpUrl !: string;

  constructor(private authService: AuthService, private router: Router, private activadetRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activadetRoute.queryParams.subscribe(res => {
      console.log(res);
      this.tmpUrl = res['url']
    })
  }

  onAuthFormSubmit(form: NgForm) {
    this.authService.logInUser(form.value);
    if (this.tmpUrl != undefined) {
      this.router.navigate([this.tmpUrl])
    } else {
      this.router.navigate(['/'])
    }
  }

}
