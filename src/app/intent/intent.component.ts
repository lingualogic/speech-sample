/**
 * Intent-Komponente
 */

import { Component, OnInit, OnDestroy, ChangeDetectorRef, LOCALE_ID, Inject } from '@angular/core';

import { IntentService } from 'speech-angular';
import { Intent } from './intent';
import { Concept } from './concept';


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

  concept: Concept;
  conceptFlag = false;
  conceptList: Array<Concept> = [];

  intentFlagOn = false;
  messages = [];

  constructor(
    private ref: ChangeDetectorRef,
    @Inject(LOCALE_ID) private localeId: string,
    private intentService: IntentService
  ) { }

  ngOnInit(): void {

    this.intentResultEvent = this.intentService.resultEvent.subscribe( aIntentResult => {
      this.intent = aIntentResult;
      this.intentName = aIntentResult.intent;
      this.intentText = aIntentResult.literal;
      this.intentConfidence = aIntentResult.confidence;
      const message = 'Intent: ' + this.intentName + ' (Confidence: ' + this.intentConfidence + ')';

      if ( this.intent.conceptList.length > 0 ) {
        this.conceptFlag = true;
        this.conceptList = this.intent.conceptList;
        this.concept = this.intent.conceptList[0];

      }
      this.intentFlagOn = true;
      console.log(this.intent);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.errorEvent = this.intentService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Error: ' + error.message ;
      this.ref.detectChanges();
    });

    this.intentStartEvent = this.intentService.startEvent.subscribe( () => {
      let message: string;
      if (this.localeId === 'en') {
        message = 'natural language understanding starts';
      } else {
        message = 'Sprachanalyse startet';
      }
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.intentStopEvent = this.intentService.stopEvent.subscribe( () => {
      let message: string;
      if (this.localeId === 'en') {
        message = 'natural language understanding stops';
      } else {
        message = 'Sprachanalyse stoppt';
      }
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
    if (!this.intentText) {
      if (this.localeId === 'en') {
        this.errorText = 'Please enter a Prompt.';
      } else {
        this.errorText = 'Bitte einen Text eingeben.';
      }
      this.errorFlag = true;
      return;
    }
    console.log( 'Input: ', this.intentText);
    this.intent = new Intent;
    this.intentFlagOn = false;
    this.errorFlag = false;
    this.conceptFlag = false;
    this.intentService.text = this.intentText;
    this.intentService.start();
  }

  // stop(): void {
  //   this.intentService.stop();
  // }

  setConcept(literal: string): void {
    for (const concept of this.conceptList) {
      if (concept.literal === literal) {
        this.concept = concept;
        break;
      }
    }
    this.ref.detectChanges();
  }

}
