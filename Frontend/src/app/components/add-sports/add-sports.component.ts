import { Component, OnInit} from '@angular/core';
import { Sports } from 'src/app/models/sports.model';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-add-sports',
  templateUrl: './add-sports.component.html',
  styleUrls: ['./add-sports.component.css']
})
export class AddSportsComponent implements OnInit {
   
  sports:Sports={
    noOfPlayers:'',
    sportsName:'',
    sportsType:''
  };
   submitted=false;
   constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
  }
  saveSports(): void {
    const data = {
      noOfPlayers: this.sports.noOfPlayers,
      sportsName: this.sports.sportsName,
      sportsType:this.sports.sportsType

    };

    this.sportsService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.  submitted = true
        },
        error: (e) => console.error(e)
      });
  }

  newSports(): void {
    this.submitted = false;
    this.sports = {
      noOfPlayers:'',
      sportsName:'',
      sportsType:''
    };
  }




}
