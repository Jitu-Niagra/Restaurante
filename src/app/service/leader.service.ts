import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { leader } from './../shared/leader';



@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders():leader[]{
    return LEADERS
  }
  getLeader(id:string):leader{
    return LEADERS.filter((lead)=>(lead.id==id))[0]
  }
  getFeaturedLeader():leader{
    return LEADERS.filter((lead)=>(lead.featured))[0]
  }
}
