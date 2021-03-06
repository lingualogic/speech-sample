/**
 * Listen-Komponente
 */

import { Component, OnInit, OnDestroy, ChangeDetectorRef, Input, LOCALE_ID, Inject } from '@angular/core';

import { Listen } from '../listen';

// import { LISTENS } from '../mock-listens';

import { ListenService } from 'speech-angular';
import { AppLocaleService } from '../app-locale.service';


@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit, OnDestroy {

  @Input() listen: string;

  listens: Listen[];

  // event of the listenservice
  listenStartEvent: any;
  listenStopEvent: any;
  listenResult: any;
  errorEvent: any;

  // view variable
  listenButtonOn = false;
  errorFlag = false;
  errorText: string;
  messages = [];


  constructor(
    private localeService: AppLocaleService,
    private listenService: ListenService,
    private ref: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    // this.errorText = 'Error: AudioPlayer._decodeAudio: DOMException';

    // if (this.checkLocalStorage) {
    //   // console.log('Storage avaliable.');
    //   if  (!localStorage.getItem( 'listens')) {
    //     localStorage.setItem( 'listens', JSON.stringify(LISTENS));
    //   }
    //   this.getListens();
    // }

    this.listenResult = this.listenService.resultEvent.subscribe(aText => {
      let message: string;
      if (this.localeService.isEnglish()) {
        message = 'voice input: ' + aText;
      } else {
        message = 'Eingabe: ' + aText;
      }
      this.setListen(aText);
      console.log(message);
      // this.messages.push(message)
      this.ref.detectChanges();
    });

    this.listenStartEvent = this.listenService.startEvent.subscribe( () => {
      this.messages = [];
      let message: string;
      if (this.localeService.isEnglish()) {
        message = 'speech recognition starts';
      } else {
        message = 'Spracherkennung startet';
      }
      this.listenButtonOn = true;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.listenStopEvent = this.listenService.stopEvent.subscribe( () => {
      let message: string;
      if (this.localeService.isEnglish()) {
        message = 'speech recognition stops';
      } else {
        message = 'Spracherkennung stoppt';
      }
      this.listenButtonOn = false;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.errorEvent = this.listenService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Error: ' + error.message ;
      this.ref.detectChanges();
    });
  }

  // checkLocalStorage(): boolean {
  //   try {
  //     return 'localStorage' in window && window['localStorage'] !== null;
  //   } catch (e) {
  //     return false;
  //   }
  // }

  ngOnDestroy(): void {
    this.listenResult.unsubscribe();
    this.listenStartEvent.unsubscribe();
    this.listenStopEvent.unsubscribe();
    this.errorEvent.unsubscribe();
  }

  setListen(text): void {
    this.listen = text;
    this.ref.detectChanges();
  }

  // getListens(): void {
  //   this.listens = JSON.parse(localStorage.getItem( 'listens'));
  // }

  // delete(listen: Listen): void {
  //   this.listens = this.listens.filter(l => l !== listen);
  //   localStorage.setItem( 'listens', JSON.stringify(this.listens));
  //   const message = 'Spracheingabe gelöscht';
  //   this.messages.push(message);
  //   this.ref.detectChanges();
  // }

  // add(content: string): void {
  //   content = content.trim();
  //   const context = 'SampleApp';
  //   // const listenId = '';
  //   if (!content) { return; }
  //   this.listens.push({ content, context } as Listen);
  //   localStorage.setItem( 'listens', JSON.stringify(this.listens));
  //   const message = 'Spracheingabe gespeichert';
  //   this.messages.push(message);
  //   this.ref.detectChanges();
  // }

  start(): void {
    this.errorFlag = false;
    this.listenService.start();
  }

  stop(): void {
    this.listenService.stop();
  }

}
