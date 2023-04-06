import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CarHttpService } from 'src/app/services/car-http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: CarHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    console.log(form.value)
    this.http.createCar(form.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/'])
      }
    })
  }

}
