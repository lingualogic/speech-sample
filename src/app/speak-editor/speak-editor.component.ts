import { Component, OnInit, Input, Output, EventEmitter, LOCALE_ID, Inject } from '@angular/core';
import { SpeakService, BotService } from 'speech-angular';
import { AppLocaleService } from '../app-locale.service';

@Component({
  selector: 'app-speak-editor',
  templateUrl: './speak-editor.component.html',
  styleUrls: ['./speak-editor.component.css']
})
export class SpeakEditorComponent implements OnInit {

  @Input() disableAudioFileName = false;
  @Output() audioOn = new EventEmitter<boolean>();

  audioButtonOn: boolean;
  audioFilePath: string;
  audioFileName: string;
  audioFileFormat: string;

  constructor(
    private localeService: AppLocaleService,
    private speakService: SpeakService) {
  }

  ngOnInit() {
    this.audioButtonOn = this.speakService.audio;
    this.audioFilePath = this.speakService.path;
    this.audioFileFormat = this.speakService.format;
    if (this.localeService.isEnglish()) {
      this.audioFileName = 'HelloWorld';
    } else {
      this.audioFileName = 'HalloWelt';
    }
    this.setAudioOn();
  }

  setAudioOn() {
    this.audioOn.emit(this.audioButtonOn);
  }

  toggleAudio(): void {
    if (this.audioButtonOn) {
      const message = 'Set Audio On...';
      this.speakService.audio = true;
      console.log(message);
    } else {
      const message = 'Set Audio Off...';
      this.speakService.audio = false;
      console.log(message);
    }
    this.setAudioOn();
  }

  setAudioFilePath(): void {
    const message = 'Set audio file path to ' + this.audioFilePath + '.';
    // this.speakService.setAudioFilePath(this.audioFilePath);
    this.speakService.path = this.audioFilePath;
    console.log(message);
  }

  setAudioFormat(): void {
    const message = 'Set audio file format to ' + this.audioFileFormat + '.';
    // this.speakService.setAudioFormat(this.audioFileFormat);
    this.speakService.format = this.audioFileFormat;
    console.log(message);
  }
}
