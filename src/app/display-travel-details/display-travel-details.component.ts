import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelDetails } from '../add-travel-details/add-travel-details.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-display-travel-details',
  templateUrl: './display-travel-details.component.html',
  styleUrls: ['./display-travel-details.component.css']
})
export class DisplayTravelDetailsComponent implements OnInit {

  travelDetailsList: TravelDetails[] = [];

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.getTravellersList();
  }

  getTravellersList() {
    this.appService.getTravelDetails().subscribe(res => {
      this.travelDetailsList = <TravelDetails[]>res;
    });
  }

  goBack() {
    this.router.navigate(['../']);
  }

}
