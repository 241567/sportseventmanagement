import { Component,OnInit } from '@angular/core';
import { Events } from '../models/events.model';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  events: Events = new Events();
  constructor(private eventsService: EventsService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  saveEvents(){
    this.eventsService.createEvents(this.events).subscribe( data =>{
      console.log(data);
      this.goToEventsList();
    },
    error => console.log(error));
  }
  goToEventsList(){
    this.router.navigate(['/events']);
  }
  onSubmit(){
    console.log(this.events);
    this.saveEvents();
  }

}
