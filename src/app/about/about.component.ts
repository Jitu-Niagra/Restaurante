import { Component, OnInit } from '@angular/core';
import { leader } from './../shared/leader';
import { LEADERS } from './../shared/leaders';
import { LeaderService } from './../service/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 leaders:any;
  constructor( private  leaderService:LeaderService) {
      this.leaders=leaderService.getLeaders()
      
  } 

  ngOnInit(): void {
  }
}
