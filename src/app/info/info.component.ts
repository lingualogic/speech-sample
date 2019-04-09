import { Component, OnInit } from '@angular/core';
import { AppLocaleService } from './../app-locale.service';


@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    constructor( private localeService: AppLocaleService ) { }

    ngOnInit() {
        // localeService
    }

}
