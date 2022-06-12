import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelDetails } from './add-travel-details/add-travel-details.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getTravelDetails() {
    return this.http.get("http://localhost:8080/travel-details");
  }

  saveTravelDetails(travelDetails: TravelDetails) {
    return this.http.post("http://localhost:8080/travel-details", travelDetails);
  }
}
