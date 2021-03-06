/**
 * Intent-Komponente
 */

import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { IntentService } from 'speech-angular';
import { Intent } from './intent';
import { Concept } from './concept';
import { AppLocaleService } from '../app-locale.service';


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
  intentSpeech = '';

  concept: Concept;
  conceptFlag = false;
  conceptList: Array<Concept> = [];

  intentFlagOn = false;
  messages = [];

  constructor(
    private localeService: AppLocaleService,
    private intentService: IntentService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.intentResultEvent = this.intentService.resultEvent.subscribe( aIntentResult => {
      this.intent = aIntentResult;
      this.intentName = aIntentResult.intent;
      this.intentText = aIntentResult.literal;
      this.intentConfidence = aIntentResult.confidence;

      if ( this.intent.conceptList.length > 0 ) {
        this.conceptFlag = true;
        this.conceptList = this.intent.conceptList;
        this.concept = this.intent.conceptList[0];
      }

      const message = 'Intent: ' + this.intentName ;
      this.messages.push(message);

      this.intentFlagOn = true;
      this.ref.detectChanges();
    });

    this.errorEvent = this.intentService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Error: ' + error.message ;
      this.ref.detectChanges();
    });

    this.intentStartEvent = this.intentService.startEvent.subscribe( () => {
      let message: string;
      if (this.localeService.isEnglish()) {
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
      if (this.localeService.isEnglish()) {
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
      if ( this.localeService.isEnglish()) {
        this.errorText = 'Please enter a Prompt.';
      } else {
        this.errorText = 'Bitte einen Text eingeben.';
      }
      this.errorFlag = true;
      return;
    }
    this.clear();
    this.errorFlag = false;
    this.conceptFlag = false;
    this.intentService.text = this.intentText;
    this.intentService.start();
  }

  // stop(): void {
  //   this.intentService.stop();
  // }

  getNlu() {
    return this.intentService.nlu;
  }

  setLanguage(language: string): void {
    this.clear();
    this.intentService.language = language;
    console.log('Set Language to ' + language + '.');
  }

  setNLU(nlu: string): void {
    this.clear();
    this.intentService.nlu = nlu;
    console.log('Set NLU to ' + nlu + '.');
  }

  clear() {
    this.messages = [];
    this.intent = new Intent;
    this.intentFlagOn = false;
  }

}
