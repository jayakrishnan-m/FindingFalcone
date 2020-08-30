import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass'],
})
export class ResultComponent implements OnInit {
  falconeFound:boolean = true;
  planetName:string = '';
  vehicleName:string = '';
  distance:number = 0;
  time:number = 0;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.dataService.latestResult.subscribe((data) => {
      if(!data) {
        this.router.navigate(['/'])
      }
      if(data['status'] == 'success') {
        this.falconeFound = true;
        this.planetName = data['planet_name'];
        this.vehicleName = data['search_data']['vehicles']['name'];  
        this.distance = data['search_data']['planets']['distance'];
        this.time = data['time'];
      } else {
        this.falconeFound = false;
      }

    });
  }
}
