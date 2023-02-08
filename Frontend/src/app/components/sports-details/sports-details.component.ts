import { Component, Input, OnInit} from '@angular/core';
import { Sports } from 'src/app/models/sports.model';
import { SportsService } from 'src/app/services/sports.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sports-details',
  templateUrl: './sports-details.component.html',
  styleUrls: ['./sports-details.component.css']
})
export class SportsDetailsComponent implements OnInit{
  
  @Input() viewMode = false;
  @Input() currentSports: Sports = {
    sportsId: '',
    noOfPlayers: '',
    sportsName:'',
    sportsType:''
  };
  message = '';
  constructor(
    private sportsService: SportsService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getSports(this.route.snapshot.params["sportsId"]);
    }
  }
  getSports(sportsId: any): void {
    this.sportsService.get(sportsId)
      .subscribe({
        next: (data) => {
          this.currentSports = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }





}
