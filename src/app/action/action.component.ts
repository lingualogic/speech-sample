import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActionService } from 'speech-angular';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit, OnDestroy {

  // event of the actionservice
  actionStartEvent: any;
  actionStopEvent: any;
  errorEvent: any;

  // view variable
  actionButtonOn = false;
  actionName: string;
  elementName: string;
  errorFlag = false;
  errorText: string;
  messages = [];


  constructor(
    private ref: ChangeDetectorRef,
    private actionService: ActionService) {
     }

  ngOnInit() {

    this.actionName = 'toggleHome';
    this.elementName = 'show';

    this.actionStartEvent = this.actionService.startEvent.subscribe( () => {
      this.messages = [];
      const message = 'Startfunktion wird ausgeführt...';
      this.actionButtonOn = true;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.actionStopEvent = this.actionService.stopEvent.subscribe( () => {
      const message = 'Stopfunktion wird ausgeführt...';
      this.actionButtonOn = false;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.errorEvent = this.actionService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Fehler: ' + error.message ;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.actionStopEvent.unsubscribe();
    this.actionStartEvent.unsubscribe();
    this.errorEvent.unsubscribe();
  }

  start(): void {
    this.actionService.action = this.actionName;
    this.actionService.element =  this.elementName;
    this.actionService.start();
  }

  stop(): void {
    this.actionService.stop();
  }

  setAction(): void {
    console.log('Set Action...');
    this.actionService.action = this.actionName;
  }

  setElement(): void {
    console.log('Set Element...');
    this.actionService.element = this.actionName;
  }

}
