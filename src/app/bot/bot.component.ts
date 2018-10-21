import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BotService } from 'speech-angular';


@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit, OnDestroy {

  dialogSpeakEvent: any;
  dialogActionEvent: any;
  dialogStartEvent: any;
  dialogStopEvent: any;
  errorEvent: any;

  dialogButtonOn = false;
  errorFlag = false;
  errorText: string;

  messages = [];

  constructor(
    private ref: ChangeDetectorRef,
    private botService: BotService
    ) { }

  ngOnInit() {

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

    this.dialogStartEvent = this.botService.startEvent.subscribe(data => {
      this.messages = [];
      this.dialogButtonOn = true;
      const message = 'Dialog startet... ';
      // console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });
    this.dialogStopEvent = this.botService.stopEvent.subscribe( () => {
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

    this.botService.parse(localStorage.getItem( 'dialog'));

    this.botService.speak = true;

  }
  ngOnDestroy(): void {
    this.dialogSpeakEvent.unsubscribe();
    this.dialogActionEvent.unsubscribe();
    this.dialogStartEvent.unsubscribe();
    this.dialogStopEvent.unsubscribe();
    this.errorEvent.unsubscribe();

    this.botService.speak = false;
  }

  start(): void {
    this.errorFlag = false;
    this.botService.start();
  }

  stop(): void {
    this.botService.stop();
  }

}
