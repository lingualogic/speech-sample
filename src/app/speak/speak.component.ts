import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { SpeakService } from 'speech-angular';
import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';


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
    private ref: ChangeDetectorRef,
    private speakService: SpeakService) {
      }

  ngOnInit() {
    this.text = 'Geben Sie ein, was gesagt  werden soll...';

    this.speakStartEvent = this.speakService.startEvent.subscribe( () => {
      this.messages = [];
      const message = 'Sprachausgabe startet';
      this.speakButtonOn = true;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.speakStopEvent = this.speakService.stopEvent.subscribe( () => {
      const message = 'Sprachausgabe stoppt';
      this.speakButtonOn = false;
      console.log(message);
      this.messages.push(message);
      this.ref.detectChanges();
    });

    this.errorEvent = this.speakService.errorEvent.subscribe( (error) => {
      // Catch known error in Android Cordova Plugin for demo
      if (error.message !== 'TTSHtml5._getTTSVoice: keine Voice-Liste als Array vorhanden') {
        this.errorFlag = true;
        this.errorText = 'Fehler: ' + error.message ;
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
