import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Club } from './club.model';

@Injectable({providedIn:'root'})
export class ClubsService{
  private clubs: Club[] = [];
  private clubsUpdated = new Subject<Club[]>();  
  getClubs(){
      return [...this.clubs];
  }

  getUpdateClubListener(){
      return this.clubsUpdated.asObservable();
  }

  addClubs(name:string,secretary:string,content:string){
    const club: Club =  {name: name,secretary: secretary, content: content};
    this.clubs.push(club);
    this.clubsUpdated.next([...this.clubs]);  
  }

}