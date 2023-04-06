import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarHttpService } from 'src/app/services/car-http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  currentCar: any;

  constructor(private http: CarHttpService, private router: Router, private activatedRouter: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(res => {
      let carId = res['id'];
      this.http.getById(carId).subscribe(res => {
        this.currentCar = res;
        console.log(this.currentCar)
        this.currentCar.year = this.getDate(this.currentCar.year);
        this.currentCar.arrivesIn = this.getDate(this.currentCar.arrivesIn);
        this.form.setValue(this.currentCar)
      })
    })
  }

  onFormSubmit(form: NgForm, id: any) {
    console.log(form.value);
    this.http.updateCar(id, form.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/'])
      }
    })
  }

  getDate(dateText: any) {
    let tmp = new Date(dateText);
    return this.datePipe.transform(tmp, 'yyyy-MM-dd')
  }

}
