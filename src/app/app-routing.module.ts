import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTravelDetailsComponent } from './add-travel-details/add-travel-details.component';
import { DisplayTravelDetailsComponent } from './display-travel-details/display-travel-details.component';

const routes: Routes = [
  {
    path: '',
    component: AddTravelDetailsComponent
  },
  {
    path: 'display-travel-details',
    component: DisplayTravelDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
