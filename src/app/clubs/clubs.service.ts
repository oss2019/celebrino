import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Club } from './club.model';

@Injectable({providedIn:'root'})
export class ClubsService{
  private clubs: Club[] = [];
  private clubsUpdated = new Subject<Club[]>();
  
  constructor(private http: HttpClient){

  }

  getClubs(){
    this.http.get<{message: string,clubs: any}>('http://localhost:3000/api/clubs')
    .pipe(map((clubData) => {
      return clubData.clubs.map(club => {
        return {
          name: club.name,
          secretary: club.secretary,
          content: club.content,
          id: club._id
        }
      })
    }))
    .subscribe((clubs)=>{
      this.clubs = clubs;
      this.clubsUpdated.next([...this.clubs]);
    });
  }

  getUpdateClubListener(){
      return this.clubsUpdated.asObservable();
  }

  addClubs(name:string,secretary:string,content:string){
    const club: Club =  {id: null, name: name, secretary: secretary, content: content};
    this.http.post<{message: String, id: String}>('http://localhost:3000/api/clubs',club)
    .subscribe((responseData)=>{
      // console.log(responseData.message);
      const id = responseData.id;
      club.id = id;
      this.clubs.push(club);
      this.clubsUpdated.next([...this.clubs]);
    });
      
  }

  deleteClub(clubId:string){
    this.http.delete('http://localhost:3000/api/clubs/' + clubId)
    .subscribe(() => {
      const updatedClubs = this.clubs.filter(club => club.id !== clubId );
      this.clubs = updatedClubs;
      this.clubsUpdated.next([...this.clubs]);
    })
  }

}