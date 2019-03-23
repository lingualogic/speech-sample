/**
 * HelpService for SpeechHelp-System, capsulate the SpeechService-Component
 */

import { Injectable, EventEmitter } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


// speech-angular

import {
    BotService,
    ActionService
} from 'speech-angular';

import { HelpConfigInterface } from './help-config.interface';
import { HELP_CONFIG } from './help-config';
import { HELP_STATE_MAP } from './help-map';


/**
 * Help-Service delegate to SpeechService and set Speech-DialogStates from Route
 *
 * @export
 */

@Injectable()
export class HelpService {

    /**
     * Constructor for injected Router and ActivatedRoute
     */

    constructor(
        private botService: BotService,
        private actionService: ActionService,
        private router: Router,
    ) {
        // console.nepos('HelpService: start');

        // no bind functions in this code necessary

        // Router Events received
        this.router.events.subscribe((event: Event) => {

            if ( event instanceof NavigationStart) {
                // console.nepos('HelpService: router event navigation start', event);
            }

            if ( event instanceof NavigationEnd) {
                // console.nepos('HelpService: router event navigation end', event);
                const stateName = HELP_STATE_MAP[event.urlAfterRedirects] || '';
                // set new DialogState for SpeechService
                // this.setControllerState(stateName);
            }

            if (event instanceof NavigationError) {
                // Present error to user
                console.log('HelpService: router event navigation error', event);
            }

        });

        // Initialize HelpService

        if ( this.init( HELP_CONFIG ) !== 0) {
        console.log('HelpService: Speech not initialized');
        }
    }


    // Initialization


    /**
     * Initialize the help service
     *
     * @param helpOptions optionale Config Options for init help service
     */

    init(helpOptions?: HelpConfigInterface): number {
        return 0;
    }

    /**
     * Done the Service
     */

    done(): void {
    }


    // Help-Functions


    /**
     * Umschalten zwischen start/stop der Sprachhilfe
     *
     * @return errorcode (0,-1)
     */

    toggle(): number {
        console.log('HelpService.toggle:', this.isRunning());
        if ( this.isRunning()) {
            return this.stop();
        }
        return this.start();
    }


    /**
     * Startet die Hilfe
     */

    start(): number {
        console.log('HelpService.start: der Dialog wird gestartet...');
        // Hilfe-Dialog auswaehlen
        this.botService.dialog = 'helpSample';
        this.botService.state = 'sampleInfo';
        return this.botService.start();
    }


    /**
     * Stop active help
     *
     * @return errorcode(0,-1)
     */

    stop(): number {
        console.log('HelpService.stop: der Dialog wird gestoppt');
        return this.botService.stop();
    }


    /**
     * Check, if help service initalized
     */

    isInit(): boolean {
        /*
        if(this.mBot) {
            return true;
        }
        */
        return false;
    }

    /**
     * Check, if help active
     */

    isActive(): boolean {
        return this.botService.active;
    }


    /**
     * Check, if help active
     */

    isRunning(): boolean {
        return this.botService.isRunning();
    }

    // Show-Functions

    /**
     * Check, if showable
     */

    isShow(): boolean {
        // console.log('HelpService.isShown:', this._helpShowFlag);
        // TODO: Zur Zeit noch nicht freigegeben
        // return this.botService.active;
        return false;
    }


    /**
     * create a help show event
     */
    show(): void {
        /*
        if (this.isInit()) {
            // console.log('HelpService.show');
            this._helpShowFlag = true;
            this._helpShowEvent.emit();
        }
        */
    }

    /**
     * create help hide event
     */
    hide(): void {
        /*
        if (this.isInit()) {
            // console.log('HelpService.hide');
            this._helpShowFlag = false;
            this._helpHideEvent.emit();
        }
        */
    }

    // State-Functions

    /**
     * Set current State
     *
     * @param  stateName Name of State
     * @return errorcode(0,-1)
     */

    setControllerState(stateName: string): number {
        /*
        if(this.mBot) {
            this.mBot.setDialogState(stateName);
            return 0;
        }
        */
        return -1;
    }

    /**
     * Set current SubState
     *
     * @param subStateName Name of subState
     * @return errorcode(0,-1)
     */

    setControllerSubState(subStateName: string): number {
        /*
        if(this.mBot) {
            const stateName = this.mBot.getDialogState();
            if (stateName) {
                let subState = stateName;
                if ( stateName.indexOf('.') === -1){
                    subState = subState + '.' + subStateName;
                } else {
                    subState = stateName.split('.')[0] + '.' + subStateName;
                }
                // do not fill with logs the dev environment
                // console.nepos('HelpService.setControllerSubState:', subState);
                this.mBot.setDialogState(subState);
                return 0;
            }
        }
        */
        return -1;
    }

    // Element-Functions

    /**
     * insert directive Element for actions
     *
     * @param itemName    - Name of directive item
     * @param startAction - Name of Callback-Function for StartAction
     * @param stopAction  - Name ofr Callback-Function for StopAction
     *
     * @return error code(0,-1)
     */

    insertItemAction(itemName: string, startAction: any, stopAction: any ): number {
        console.log('HelpService.insertItemAction:', itemName, startAction, stopAction);
        return this.actionService.addElement(itemName, startAction, stopAction);
    }

    /**
     * remove directive item
     *
     * @param itemName - Name of remove directive item
     *
     * @return errorcode(0,-1)
     */
    removeItemAction( itemName: string ): number {
        /*
        // console.log('HelpService.removeItemAction:', itemName);
        if (!this.mAction) {
            console.console('HelpService.removeItemAction: no SpeechService');
            return -1;
        }
        return this.mAction.removeElement(itemName);
        */
       return -1;
    }

    /**
     * insert Context-Flag for Contexttype
     *
     * @param itemName     - Name for Item
     * @param contextType  - Name of Context
     * @param contextFlag - Context-Flag (true or false)
     *
     * @return errorcode(0,-1)
     */

    setContextItem( itemName: string, contextType: string, contextFlag: boolean ): number {
        /*
        // console.log('HelpService.setContextItem:', aItemName, aContextType, aContextFlag);
        if (!this.mBot) {
            console.console('HelpService.setContextItem: no SpeechService');
            return -1;
        }
        if ( contextFlag ) {
            return this.mBot.addContextElement( itemName, contextType );
        } else {
            return this.mBot.removeContextElement( itemName, contextType );
        }
        */
       return -1;
    }


    /**
     * Help activate event for active help
     */
    get startEvent() {
        return this.botService.startEvent;
    }

    /**
     * Help deactivate event for stop help
     */
    get stopEvent() {
        return this.botService.stopEvent;
    }

    /**
     * Help show event for help button
     */
    get showEvent() {
        // return this._helpShowEvent;
        return null;
    }

    /**
     * Help hide event for help button
     */
    get hideEvent() {
        // return this._helpHideEvent;
        return null;
    }

    /**
     * Help speak event for help audio
     */
    get speakEvent() {
        return null;
    }

    /**
     * Help speakStop event for help audio
     */
    get speakStopEvent() {
        return null;
    }

}
