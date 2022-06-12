import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-travel-details',
  templateUrl: './add-travel-details.component.html',
  styleUrls: ['./add-travel-details.component.css']
})
export class AddTravelDetailsComponent implements OnInit {

  travelDetails = new TravelDetails();
  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }

  saveDetails() {
    this.appService.saveTravelDetails(this.travelDetails).subscribe(res => {
      this.router.navigate(['/display-travel-details']);
    }, error => {
      console.log(error);
    });
  }

}

export class TravelDetails {
  name: string = "";
  email: string = "";
  destination: string = "";
  noOfTravellers: number = 0;
  budget: number = 0;
}
