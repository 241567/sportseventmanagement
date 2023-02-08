import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participation } from 'src/app/models/participation.model';
import { ParticipationService } from 'src/app/services/participation.service';


@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.css']
})
export class ParticipationListComponent implements OnInit {

  participation: Participation[]=[];

  constructor(private  participationService: ParticipationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getParticipation();
  }

  private getParticipation(){
    this.participationService.getParticipationList().subscribe(data => {
      this.participation = data;
    });
  }


  updateEmployee(status: any){
    this.router.navigate(['update-participation', status]);
  }




}
