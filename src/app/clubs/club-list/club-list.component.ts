import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {Club} from '../club.model';
import { ClubsService } from '../clubs.service';

@Component({
    selector: 'app-club-list',
    templateUrl: './club-list.component.html',
    styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit,OnDestroy{
    // clubsList = [
    //     {name: 'Rhapsody',content: 'Rhapsody is the club of IIT DHarwad for music wings.'},
    //     {name: 'Chess',content: 'Chess is the club of IIT DHarwad for chess wings.'},
    //     {name: 'Cricket',content: 'Cricket is the club of IIT DHarwad for cricket wings.'},
    // ]
    clubsList: Club[] = [];
    private clubsSub: Subscription;

    constructor(public clubsService: ClubsService) {
        this.clubsService = clubsService;
    }
    ngOnInit() {
        this.clubsList = this.clubsService.getClubs();
        this.clubsSub = this.clubsService.getUpdateClubListener()
        .subscribe((clubsList: Club[])=>{
            this.clubsList = clubsList;
        });
    }

    ngOnDestroy() {
        this.clubsSub.unsubscribe();
    }
}