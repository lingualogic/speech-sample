import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'speech-angular';


@Component({
    selector: 'app-google',
    templateUrl: './google.component.html',
    styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

    appKey: string;
    dialogflowTokenServerUrl: string;
    dialogflowProjectId: string;

    constructor(private googleService: GoogleService) { }

    ngOnInit() {
    }

    onSubmit() {
        console.log( this.appKey );
        if ( this.googleService.setCredentials( this.appKey, this.dialogflowTokenServerUrl, this.dialogflowProjectId ) !== 0 ) {
            console.log('Konfiguration konnte nicht eingetragen werden');
        }
    }

}
