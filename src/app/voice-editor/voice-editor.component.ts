import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter, LOCALE_ID, Inject } from '@angular/core';
import { SpeakService } from 'speech-angular';
import { AppLocaleService } from '../app-locale.service';

@Component({
  selector: 'app-voice-editor',
  templateUrl: './voice-editor.component.html',
  styleUrls: ['./voice-editor.component.css']
})
export class VoiceEditorComponent implements OnInit {

  @Input() disableVoiceSelection = false;
  @Output() voiceOn = new EventEmitter<boolean>();

  voiceButtonOn = false;
  language: string;
  tts: string;
  voice: string;
  voiceList: string[];

  constructor(
    private localeService: AppLocaleService,
    private speakService: SpeakService,
    private ref: ChangeDetectorRef ) { }

  ngOnInit() {
    this.language = this.localeService.localeId;
    this.setLanguage();
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

  toggleVoice(): void {
    this.voiceButtonOn ? this.voiceButtonOn  = true : this.voiceButtonOn  = false;
  }

}
