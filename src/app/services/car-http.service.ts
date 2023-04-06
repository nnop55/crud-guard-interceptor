import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarHttpService {

  baseUrl: string = 'http://ngglobal.somee.com/api/Cars'

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.baseUrl)
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  createCar(item: any): Observable<any> {
    return this.http.post(this.baseUrl, item)
  }

  deleteCar(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  updateCar(id: any, item: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, item)
  }

}
