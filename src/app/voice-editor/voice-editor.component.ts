import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeakService } from 'speech-angular';

@Component({
  selector: 'app-voice-editor',
  templateUrl: './voice-editor.component.html',
  styleUrls: ['./voice-editor.component.css']
})
export class VoiceEditorComponent implements OnInit {

  language: string;
  tts: string;
  voice: string;
  voiceList: string[];

  constructor(
    private ref: ChangeDetectorRef,
    private speakService: SpeakService) { }

  ngOnInit() {
    this.language = this.speakService.language;
    this.tts = this.speakService.tts;
    this.voice = this.speakService.voice;
    this.voiceList = this.speakService.getVoiceList();
  }

  getVoice(): void {
    this.voice = '';
    this.voiceList = this.speakService.getVoiceList();
    this.ref.detectChanges();
  }

  setLanguage(): void {
    this.speakService.language = this.language;
    console.log('Set Language to ' + this.language + '.');
    this.getVoice();
  }

  setTTS(): void {
    this.speakService.tts = this.tts;
    console.log('Set TTS to ' + this.tts + '.');
    this.getVoice();
  }

  setVoice(): void {
    this.speakService.voice = this.voice;
    console.log('Set Voice to ' + this.voice + '.');
  }

}
