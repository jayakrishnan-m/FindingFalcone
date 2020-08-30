import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { element } from 'protractor';
import { stat } from 'fs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-find-falcon',
  templateUrl: './find-falcon.component.html',
  styleUrls: ['./find-falcon.component.sass'],
})
export class FindFalconComponent implements OnInit {
  numberOfDestination: number = 4;
  selectedItems: Array<any> = [];
  planets: any = [];
  vehicles: any = [];
  availablePlanets: any = [];
  availableVehicles: any = [];
  arrivalTimeByPlanet: any = [];
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.isLoading.next(true);
    this.dataService.getPlanets().subscribe((data) => {
      this.planets = data;
      this.dataService.isLoading.next(false);
      this.planets.forEach((element) => {
        this.availablePlanets.push({
          name: element.name,
          distance: element.distance,
          available: true,
        });
      });
    });
    this.dataService.isLoading.next(true);
    this.vehicles = this.dataService.getVehicles().subscribe((data) => {
    this.dataService.isLoading.next(false);
      this.vehicles = data;
      this.availableVehicles = this.vehicles;
    });
    for (let index = 0; index < this.numberOfDestination; index++) {
      this.selectedItems[index] = {
        planets: {
          name: 'N/A',
          distance: 'N/A',
          imageUrl: 'assets/img/planet-unknown.png',
          isSet: false,
        },
        vehicles: {
          name: 'N/A',
          speed: 'N/A',
          maxDistance: 'N/A',
          imageUrl: 'assets/img/vehicle-unknown.png',
          isSet: false,
        },
      };
    }
  }

  selectDestination(destinationIndex, planetObj) {
    this.availablePlanets.forEach((element) => {
      if (element.name == planetObj.name) {
        element.available = false;
      }
      if (this.selectedItems[destinationIndex]['planets'].isSet) {
        if (
          element.name == this.selectedItems[destinationIndex]['planets'].name
        ) {
          element.available = true;
        }
      }
    });
    this.selectedItems[destinationIndex]['planets'].name = planetObj.name;
    this.selectedItems[destinationIndex]['planets'].distance =
      planetObj.distance;
    this.selectedItems[destinationIndex]['planets'].imageUrl =
      'assets/img/planets/' + planetObj.name + '.png';
    this.selectedItems[destinationIndex]['planets'].isSet = true;
    this.resetVehiclesOnDestinationChange(destinationIndex);
  }

  selectVehicle(destinationIndex, vehicleObj) {
    this.availableVehicles.forEach((element) => {
      if (element.name == vehicleObj.name) {
        element.total_no = --element.total_no;
      }
      if (this.selectedItems[destinationIndex]['vehicles'].isSet) {
        if (
          element.name == this.selectedItems[destinationIndex]['vehicles'].name
        ) {
          element.total_no = ++element.total_no;
        }
      }
    });
    this.selectedItems[destinationIndex]['vehicles'].imageUrl =
      'assets/img/vehicles/' + vehicleObj.name + '.png';
    this.selectedItems[destinationIndex]['vehicles'].name = vehicleObj.name;
    this.selectedItems[destinationIndex]['vehicles'].speed = vehicleObj.speed;
    this.selectedItems[destinationIndex]['vehicles'].maxDistance =
      vehicleObj.max_distance;
    this.selectedItems[destinationIndex]['vehicles'].isSet = true;
    this.arrivalTimeByPlanet[destinationIndex] =
      this.selectedItems[destinationIndex]['planets'].distance /
      this.selectedItems[destinationIndex]['vehicles'].speed;
  }

  resetVehiclesOnDestinationChange(destinationIndex) {
    this.availableVehicles.forEach((element) => {
      if (this.selectedItems[destinationIndex]['vehicles'].isSet) {
        if (
          element.name == this.selectedItems[destinationIndex]['vehicles'].name
        ) {
          element.total_no = ++element.total_no;
        }
      }
    });
    this.selectedItems[destinationIndex]['vehicles'] = {
      name: 'N/A',
      speed: 'N/A',
      maxDistance: 'N/A',
      imageUrl: 'assets/img/vehicle-unknown.png',
      isSet: false,
    };
  }

  checkAllDestinationAndVehiclesAreSet() {
    let isReadyToFindFalcone = true;
    this.selectedItems.forEach((item) => {
      if (!item['vehicles'].isSet || !item['planets'].isSet) {
        isReadyToFindFalcone = false;
      }
    });
    return isReadyToFindFalcone;
  }

  getAvailablePlanets() {
    let result = this.availablePlanets.filter((item) => item.available);
    return result;
  }

  getAvailableVehicles(distance) {
    let result = [];
    result = this.availableVehicles.filter(
      (item) => item.max_distance >= distance && item.total_no > 0
    );
    return result;
  }

  getSelectedDestinationAndVehicles() {
    let result = {
      planet_names: [],
      vehicle_names: [],
    };
    this.selectedItems.forEach((item) => {
      result['planet_names'].push(item['planets']['name']);
      result['vehicle_names'].push(item['vehicles']['name']);
    });
    return result;
  }

  getTotalTime() {
    let totalTime = 0;
    this.arrivalTimeByPlanet.forEach((element) => {
      totalTime += element;
    });
    return totalTime;
  }

  findFalcone() {
    this.dataService.isLoading.next(true);
    if (this.checkAllDestinationAndVehiclesAreSet()) {
      this.dataService.getToken().subscribe((data) => {
        let requestData = this.getSelectedDestinationAndVehicles();
        requestData['token'] = data['token'];
        this.dataService.findFalcone(requestData).subscribe((data) => {
          this.dataService.isLoading.next(false);
          if (data['status'] === 'success') {
            data['time'] = this.getTotalTime();
            data['search_data'] = this.selectedItems.filter((item) => {
              if(data['planet_name'] === item['planets']['name']) {
                return item;        
              }
            });
            data['search_data'] = data['search_data'][0];
          }
          this.dataService.updateLatestResult(data);
          this.router.navigate(['/result']);
        });
      });
    }
  }
}
