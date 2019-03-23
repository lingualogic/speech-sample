import { Component, OnInit } from '@angular/core';
import { NuanceService } from 'speech-angular';


@Component({
    selector: 'app-nuance',
    templateUrl: './nuance.component.html',
    styleUrls: ['./nuance.component.css']
})
export class NuanceComponent implements OnInit {

    // nuanceCredential = new NuanceCredential();
    appId: string;
    appKey: string;
    nluTag: string;

    constructor(private nuanceService: NuanceService) { }

    ngOnInit() {
    }

    onSubmit() {
        if ( this.nuanceService.setCredentials( this.appId, this.appKey, this.nluTag ) !== 0 ) {
            console.log('Konfiguration konnte nicht eingetragen werden');
        }
    }

}
