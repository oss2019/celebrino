import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ClubsService } from '../clubs.service';
@Component({
    selector: 'app-club-registration',
    templateUrl: './club-registration.component.html',
    styleUrls: ['./club-registration.component.css']
})
export class ClubRegistrationComponent {
    clubName = '';
    clubSecretary = '';
    clubDescription = '';

    constructor(public clubService: ClubsService) {
        this.clubService = clubService;
    }
    onAddClub(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.clubService.addClubs(form.value.clubName, form.value.clubSecretary, form.value.clubDescription);
        form.resetForm();

    }
}
