import {
  Component,
  ViewEncapsulation,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy
} from '@angular/core';


import { HelpService } from './../service/help.service';


/**
 * HelpButton Class
 */
@Component({
  selector: 'speech-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HelpButtonComponent implements OnInit, OnDestroy {

  /**
   * Help show flag, if true, then help button show, else hide
   */
  helpShowFlag = false;

  /**
   * Help activate flag, if true run help, else stop help
   */
  helpActiveFlag = false;

  /**
   * Help init event, emit if help service initialized
   */
  helpInitEvent: any;

  /**
   * Help activate event, set helpActiveFlag = true
   */
  helpActiveEvent: any;

  /**
   * Help deactivate event, sethelpActiveFlag = false
   */
  helpDeactiveEvent: any;

  /**
   * Help show event, sethelpShowFlag = true
   */
  helpShowEvent: any;

  /**
   * Help hide event, sethelpShowFlag = false
   */
  helpHideEvent: any;


  /**
   * Constructor to setup the store service and injected HelpService
   */
  constructor(private helpService: HelpService) {
    // no bind functions in this code necessary
  }

  /**
   * Initialize the Component
   */
  ngOnInit(): void {
    try {
      // subscribe help events
      /*
      this.helpInitEvent = this.helpService.initEvent.subscribe(() => {
        this.helpShowFlag = true;
      });
      this.helpActiveEvent = this.helpService.activeEvent.subscribe(() => {
        this.helpActiveFlag = true;
      });
      this.helpDeactiveEvent = this.helpService.deactiveEvent.subscribe(() => {
        this.helpActiveFlag = false;
      });
      this.helpShowEvent = this.helpService.showEvent.subscribe(() => {
        this.helpShowFlag = true;
      });
      this.helpHideEvent = this.helpService.hideEvent.subscribe(() => {
        this.helpShowFlag = false;
      });
      // help show flag init
      this.helpShowFlag = this.isShown();
      */
    } catch (exception) {
      // TODO: karma error, copnsole.nepos not exist
      console.log('HelpButton: Exception ', exception);
    }
  }

  /**
   * Finalize the Component
   */
  ngOnDestroy(): void {
    try {
      // unsubscribe help events
      /*
      this.helpInitEvent.unsubscribe();
      this.helpActiveEvent.unsubscribe();
      this.helpDeactiveEvent.unsubscribe();
      this.helpShowEvent.unsubscribe();
      this.helpHideEvent.unsubscribe();
      */
    } catch (exception) {
      console.log('HelpButton: Exception ', exception);
    }
  }

  /**
   * Start/stop Help
   */
  toggle(): void {
    console.log('HelpButton.toggle:', this.helpService.isRunning());
    this.helpService.toggle();
  }

  /**
   * Check, if Help shown
   * @return Is help initialized?
   */
  isShown(): boolean {
    return this.helpService.isInit();
  }

}
