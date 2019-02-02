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

  audioOn: boolean;
  dialogButtonOn = false;
  voiceButtonOn = false;
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
      // Catch known error in Android Cordova Plugin for demo
      if (error.message !== 'TTSHtml5._getTTSVoice: keine Voice-Liste als Array vorhanden') {
        this.errorFlag = true;
        this.errorText = 'Fehler: ' + error.message ;
        this.ref.detectChanges();
      }
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
    this.stop();
  }

  onAudioOn(audioButtonOn: boolean) {
    audioButtonOn ? this.audioOn = true : this.audioOn = false;
  }

  start(): void {
    this.errorFlag = false;
    const changeFlag = localStorage.getItem( 'ChangeFlag');

    if ( changeFlag === 'true' && this.audioOn) {
      // tslint:disable-next-line:max-line-length
      this.errorText = 'Der Dialog wurde geändert. Daher können keine Audiodateien mehr verwendet werden. Stellen Sie Audiodatein verwenden aus oder setzten Sie den Dialog zurück.';
      this.errorFlag = true;
    } else {
      this.botService.start();
    }
  }

  stop(): void {
    this.botService.stop();
  }

}
