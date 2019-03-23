import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { HelpService } from './../help/service/help.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {

    title = 'Speech-Sample';

    @Input() activeName = 'info';

    @ViewChild('tooltip') mTooltip: any;

    helpStartEvent = null;
    helpStopEvent = null;


    constructor( private helpService: HelpService ) {
    }


    ngOnInit() {
        try {
            this.helpStartEvent = this.helpService.startEvent.subscribe(() => {
                // console.log('Navbar.HelpStart:', this.mTooltip);
                // this.mTooltip.open();
            });
            this.helpStopEvent = this.helpService.stopEvent.subscribe(() => {
                // console.log('Navbar.HelpStop:', this.mTooltip);
                // this.mTooltip.close();
            });
        } catch (e) {
            console.log('NavBar.ngOnInit: Exception', e);
        }
    }


    ngOnDestroy() {
        try {
            if ( this.helpStartEvent ) {
                this.helpStartEvent.unsubscribe();
                this.helpStartEvent = null;
            }
            if ( this.helpStopEvent ) {
                this.helpStopEvent.unsubscribe();
                this.helpStopEvent = null;
            }
        } catch ( e ) {
            console.log('NavBar.ngOnDestroy: Exception', e);
        }
    }

    isShowHelp(): boolean {
        return this.helpService.isShow();
    }

}
