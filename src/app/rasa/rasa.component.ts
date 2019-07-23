import { Component, OnInit } from '@angular/core';
import { RasaService } from 'speech-angular';


@Component({
    selector: 'app-rasa',
    templateUrl: './rasa.component.html',
    styleUrls: ['./rasa.component.css']
})
export class RasaComponent implements OnInit {

    serverUrl: string;
    appKey: string;

    constructor(private rasaService: RasaService) { }

    ngOnInit() {
    }

    onSubmit() {
        // console.log( this.appKey );
        if ( this.rasaService.setCredentials( this.appKey, this.serverUrl ) !== 0 ) {
            console.log('Konfiguration konnte nicht eingetragen werden');
        }
    }

}
