import { Component, OnInit, Input } from '@angular/core';
import { SpeakService, BotService } from 'speech-angular';

@Component({
  selector: 'app-speak-editor',
  templateUrl: './speak-editor.component.html',
  styleUrls: ['./speak-editor.component.css']
})
export class SpeakEditorComponent implements OnInit {

  @Input() disableAudioFileName = false;

  audioButtonOn: boolean;
  audioFilePath: string;
  audioFileName: string;
  audioFileFormat: string;

  constructor(
    private speakService: SpeakService) {
  }

  ngOnInit() {
    this.audioButtonOn = this.speakService.audio;
    this.audioFilePath = this.speakService.path;
    this.audioFileFormat = this.speakService.format;
    this.audioFileName = 'HalloWelt';

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
