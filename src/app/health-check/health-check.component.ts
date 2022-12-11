import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {

  healthy = false;

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.apiService.getHealth().subscribe((data) => {
      this.healthy = data.status === 204;
    });
  }

}
