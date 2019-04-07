import { Component, OnInit } from '@angular/core';
import { AmazonService } from 'speech-angular';


@Component({
    selector: 'app-amazon',
    templateUrl: './amazon.component.html',
    styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

    region: string;
    identityPoolId: string;

    constructor(private amazonService: AmazonService) { }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.region, this.identityPoolId);
        if ( this.amazonService.setCredentials( this.region, this.identityPoolId ) !== 0 ) {
            console.log('Konfiguration konnte nicht eingetragen werden');
        }
    }

}
