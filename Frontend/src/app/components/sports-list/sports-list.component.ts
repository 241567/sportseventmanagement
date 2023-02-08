import { Component,OnInit } from '@angular/core';
import { Sports } from 'src/app/models/sports.model';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit{

  sports: any[] = [];
  currentSports: Sports = {};
  currentIndex = -1;
  sportsName = '';

  constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
    this.retrieveSports();
    
    
  }

  retrieveSports(): void {
    this.sportsService.getAll()
      .subscribe({
        next: (data) => {
          this.sports = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
       refreshList(): void {
        this.retrieveSports();
        this.currentSports = {};
        this.currentIndex = -1;
      }
    
      setActiveSports(sports: Sports, index:any): void {
        this.currentSports = sports;
        this.currentIndex = index;
      }
    
      searchSports(): void {
        this.currentSports = {};
        this.currentIndex = -1;
   /*     this.sportsService.getSportsByName(this.sportsName)
          .subscribe({
            next: (data) => {
              this.sports = data;
              console.log(data);
            },
            error: (e) => console.error(e)
          });*/
          if(this.sportsName != ""){
            this.sports = this.sports.filter(el => el.sportsName.toUpperCase() == this.sportsName.toUpperCase());
            console.log(this.sports, this.sportsName)
          }
          
      }

  }



