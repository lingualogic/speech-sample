import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild, LOCALE_ID, Inject  } from '@angular/core';
import { SpeakService } from 'speech-angular';
import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';
import { AppLocaleService } from '../app-locale.service';


@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.css']
})

export class SpeakComponent implements OnInit, OnDestroy {

  @ViewChild(SpeakEditorComponent)
  private speakEditorComponent: SpeakEditorComponent;

  // event of the speakservice
  speakStartEvent: any;
  speakStopEvent: any;
  errorEvent: any;

  // view variable
  audioOn: boolean;
  speakButtonOn = false;
  errorFlag = false;
  errorText: string;
  text: string;
  messages = [];

  constructor(
    private localeService: AppLocaleService,
    private speakService: SpeakService,
    private ref: ChangeDetectorRef ) {
    }

  ngOnInit() {
    if (this.localeService.isEnglish()) {
        this.text = 'Please enter a prompt...';
    } else {
        this.text = 'Geben Sie ein, was gesagt  werden soll...';
    }

    this.speakStartEvent = this.speakService.startEvent.subscribe( () => {
      this.messages = [];
      let message: string;
      if (this.localeService.isEnglish()) {
        message = 'Start voice output';
      } else {
        message = 'Sprachausgabe startet';
      }
      this.speakButtonOn = true;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.speakStopEvent = this.speakService.stopEvent.subscribe( () => {
      let message: string;
      if (this.localeService.isEnglish()) {
        message = 'Stop voice output';
      } else {
        message = 'Sprachausgabe stoppt';
      }
      this.speakButtonOn = false;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.errorEvent = this.speakService.errorEvent.subscribe((error: any) => {
      // console.log('SpeakComponent: errorEvent = ', error);
      // Catch known error in Android Cordova Plugin for demo
      if (error && error.message !== 'TTSHtml5._getTTSVoice: keine Voice-Liste als Array vorhanden') {
        this.errorFlag = true;
        this.errorText = 'Error: ' + error.message ;
        this.ref.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.speakStopEvent.unsubscribe();
    this.speakStartEvent.unsubscribe();
    this.errorEvent.unsubscribe();
  }

  onAudioOn(audioButtonOn: boolean) {
    audioButtonOn ? this.audioOn = true : this.audioOn = false;
    this.ref.detectChanges();
  }

  start(): void {
    this.errorFlag = false;
    this.speakService.text = this.text;
    this.speakService.file = this.speakEditorComponent.audioFileName;
    this.speakService.start();
  }

  stop(): void {
    this.speakService.stop();
  }

}
