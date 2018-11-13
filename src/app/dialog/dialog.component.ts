import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BotService } from 'speech-angular';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {

  dialogSpeakEvent: any;
  dialogActionEvent: any;
  dialogStartEvent: any;
  dialogStopEvent: any;
  errorEvent: any;

  dialogText: string;
  dialogButtonOn = false;
  errorFlag = false;
  errorText: string;
  messages = [];

  constructor(
    private http: HttpClient,
    private ref: ChangeDetectorRef,
    private botService: BotService) { }

  ngOnInit() {
    this.loadDialog();
    this.dialogSpeakEvent = this.botService.speakEvent.subscribe(text => {
      const message = 'Speak: ' + text;
      // console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.dialogActionEvent = this.botService.actionEvent.subscribe(data => {
      const message = 'Action: ' + data.action + ',' + data.type + ',' + data.id;
      // console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.dialogStartEvent = this.botService.startEvent.subscribe(() => {
      this.messages = [];
      this.dialogButtonOn = true;
      const message = 'Dialog startet... ';
      // console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });
    this.dialogStopEvent = this.botService.stopEvent.subscribe(() => {
      const message = 'Dialog stoppt... ';
      // console.log(message);
      this.messages.push(message);
      this.dialogButtonOn = false;
      this.ref.detectChanges();
    });
    this.errorEvent = this.botService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Fehler: ' + error.message ;
      this.ref.detectChanges();
    });

    this.botService.speak = false;
  }

  ngOnDestroy(): void {
    this.dialogSpeakEvent.unsubscribe();
    this.dialogActionEvent.unsubscribe();
    this.dialogStartEvent.unsubscribe();
    this.dialogStopEvent.unsubscribe();
    this.errorEvent.unsubscribe();
    this.stop();
  }

  loadDialog(): void {
    if (this.checkLocalStorage) {
      console.log('Local Storage avaliable.');
      if  (!localStorage.getItem( 'dialog')) {
        this.resetDialog();
      } else {
        this.dialogText = localStorage.getItem( 'dialog');
      }
    }
  }

  checkLocalStorage(): boolean {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }

  resetDialog(): void {
    this.http.get('assets/speech/speech.def', {responseType: 'text'}).subscribe(data => {
      console.log(data);
      localStorage.setItem( 'dialog', data);
      localStorage.setItem( 'ChangeFlag', 'false' );
      this.dialogText = data;
    });
  }

  saveDialog(): void {
    this.botService.parse(this.dialogText);
    localStorage.setItem( 'dialog',  this.dialogText);
    this.checkChanges();
  }

  checkChanges(): void {
    let cache;
    cache = localStorage.getItem( 'dialog');
    console.log(cache);
    let file;
    this.http.get('assets/speech/speech.def', {responseType: 'text'}).subscribe(data => {
      file  =  data;
      if (cache === file) {
        localStorage.setItem( 'ChangeFlag', 'false' );
      } else {
        localStorage.setItem( 'ChangeFlag', 'true' );
      }
    });
  }

  start(): void {
    this.errorFlag = false;
    // this.botService.parse(this.dialogText);
    this.saveDialog();
    this.botService.start();
  }

  stop(): void {
    this.botService.stop();
  }

}
