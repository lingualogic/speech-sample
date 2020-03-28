import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'speech-angular';


@Component({
    selector: 'app-google',
    templateUrl: './google.component.html',
    styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

    appKey: string;
    googleServerUrl: string;
    dialogflowTokenServerUrl: string;
    dialogflowProjectId: string;

    constructor(private googleService: GoogleService) { }

    ngOnInit() {
      this.appKey = ' ';
    }

    onSubmit() {
        console.log( this.appKey );
        // tslint:disable-next-line: max-line-length
        if ( this.googleService.setCredentials( this.appKey, this.googleServerUrl, this.dialogflowTokenServerUrl, this.dialogflowProjectId ) !== 0 ) {
            console.log('Konfiguration konnte nicht eingetragen werden');
        }
    }

}
