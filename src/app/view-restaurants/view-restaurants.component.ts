import { Component } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-view-restaurants',
  templateUrl: './view-restaurants.component.html',
  styleUrls: ['./view-restaurants.component.scss']
})
export class ViewRestaurantsComponent {

  public restaurantsList = [];
  public cityName: string ='';
  public errorMessage: string;
  public formSubmitted: boolean = false;


  constructor(private _dataService: GetDataService) { }

   submit(){
    this.formSubmitted = true;
    this._dataService.getData(this.cityName).subscribe(
      data => this.restaurantsList = data["restaurants"],
      error => this.errorMessage = error.statusText
    );
  }


}
