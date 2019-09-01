import { Component, OnInit } from '@angular/core';
import { MicrosoftService } from 'speech-angular';


@Component({
    selector: 'app-microsoft',
    templateUrl: './microsoft.component.html',
    styleUrls: ['./microsoft.component.css']
})
export class MicrosoftComponent implements OnInit {

    region: string;
    subscriptionKey: string;
    luisEndpoint: string;

    constructor(private microsoftService: MicrosoftService) { }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.region, this.subscriptionKey);
        if ( this.microsoftService.setCredentials( this.region, this.subscriptionKey, this.luisEndpoint ) !== 0 ) {
            console.log('Konfiguration konnte nicht eingetragen werden');
        }
    }

}
