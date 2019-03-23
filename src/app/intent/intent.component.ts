/**
 * Intent-Komponente
 */

import { Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';

import { IntentService } from 'speech-angular';
import { Intent } from './intent';


@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})
export class IntentComponent implements OnInit, OnDestroy {

  // event of the listenservice

  intentResultEvent: any;
  intentStartEvent: any;
  intentStopEvent: any;
  errorEvent: any;

  // view variable
  errorFlag = false;
  errorText: string;

  intent: Intent;
  intentText = '';
  intentName = '';
  intentConfidence = 0;

  intentButtonOn = false;
  messages = [];

  constructor(
    private ref: ChangeDetectorRef,
    private intentService: IntentService
  ) { }

  ngOnInit(): void {

    this.intentResultEvent = this.intentService.resultEvent.subscribe( aIntentResult => {
      this.intent = aIntentResult;
      this.intentName = aIntentResult.intent;
      this.intentText = aIntentResult.literal;
      this.intentConfidence = aIntentResult.confidence;
      const message = 'Gefundener Intent: ' + this.intentName + ' (Confidence: ' + this.intentConfidence + ')';
      console.log(this.intent);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.errorEvent = this.intentService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Fehler: ' + error.message ;
      this.ref.detectChanges();
    });

    this.intentStartEvent = this.intentService.startEvent.subscribe( () => {
      const message = 'Sprachanalyse startet';
      this.intent = new Intent;
      this.intentButtonOn = true;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.intentStopEvent = this.intentService.stopEvent.subscribe( () => {
      const message = 'Sprachanalyse stoppt';
      this.intentButtonOn = false;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.intentResultEvent.unsubscribe();
    this.intentStartEvent.unsubscribe();
    this.intentStopEvent.unsubscribe();
    this.errorEvent.unsubscribe();
  }

  start(): void {
    console.log( 'Analysetext: ', this.intentText);
    this.errorFlag = false;
    this.intentService.text = this.intentText;
    this.intentService.start();
  }

  stop(): void {
    this.intentService.stop();
  }

}
