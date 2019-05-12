import { Component, OnInit } from '@angular/core';
import { GoogleService } from 'speech-angular';


@Component({
    selector: 'app-google',
    templateUrl: './google.component.html',
    styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

    appKey: string;

    constructor(private googleService: GoogleService) { }

    ngOnInit() {
    }

    onSubmit() {
        console.log( this.appKey );
        if ( this.googleService.setCredentials( this.appKey ) !== 0 ) {
            console.log('Konfiguration konnte nicht eingetragen werden');
        }
    }

}
