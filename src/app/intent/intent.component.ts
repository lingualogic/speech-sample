/**
 * Intent-Komponente
 */

import { Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';


import { IntentService } from 'speech-angular';


@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})
export class IntentComponent implements OnInit, OnDestroy {

  // event of the listenservice

  intentResultEvent: any;
  errorEvent: any;

  // view variable
  errorFlag = false;
  errorText: string;
  intentText = 'Geben Sie ein, was das Sprachmodel gefragt werden soll...';
  intentName = '';
  language: string;

  constructor(
    private ref: ChangeDetectorRef,
    private intentService: IntentService
  ) { }

  ngOnInit(): void {
    this.language = this.intentService.language;

    this.intentResultEvent = this.intentService.resultEvent.subscribe( aIntentResult => {
      this.intentName = aIntentResult.intent;
      this.ref.detectChanges();
    });

    this.errorEvent = this.intentService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Fehler: ' + error.message ;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.intentResultEvent.unsubscribe();
    this.errorEvent.unsubscribe();
  }

  start(): void {
    console.log( 'Analysetext: ', this.intentText);
    this.errorFlag = false;
    this.intentService.language = this.language;
    this.intentService.text = this.intentText;
    this.intentService.start();
  }

  setLanguage(): void {
    console.log('Sprache: ' + this.language);
  }

}
