import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
})
export class LoaderComponent implements OnInit {
  loading: boolean = true;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.isLoading.subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }
}
