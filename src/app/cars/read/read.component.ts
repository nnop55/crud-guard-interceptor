import { Component, OnInit } from '@angular/core';
import { CarHttpService } from 'src/app/services/car-http.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  carList: any[] = [];
  loadingStatus: boolean = false;

  constructor(private http: CarHttpService, private loader: LoadingService) { }

  ngOnInit(): void {
    this.loader.loadingEmitter.subscribe(res => {
      console.log(res);
      this.loadingStatus = res;
    })
    this.readCars();
  }



  readCars() {
    this.http.getCars().subscribe(res => {
      this.carList = res;
      console.log(this.carList);
      this.loadingStatus = res;
      this.loadingStatus = false;
    })
  }

  deleteCar(id: any) {
    this.http.deleteCar(id).subscribe(res => {
      console.log(res)
      if (res) {
        this.readCars();
      }
    })
  }

}
