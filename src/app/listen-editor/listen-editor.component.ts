import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { ListenService } from 'speech-angular';
import { AppLocaleService } from '../app-locale.service';

@Component({
  selector: 'app-listen-editor',
  templateUrl: './listen-editor.component.html',
  styleUrls: ['./listen-editor.component.css']
})
export class ListenEditorComponent implements OnInit {

  language: string;
  asr: string;

  constructor(
    private localeService: AppLocaleService,
    private listenService: ListenService) { }

  ngOnInit() {
    this.language = this.localeService.localeId;
    this.setLanguage();
    this.asr = this.listenService.asr;
  }

  setLanguage(): void {
    this.listenService.language = this.language;
    console.log('Set Language to ' + this.language + '.');
  }

  setASR(): void {
    this.listenService.asr = this.asr;
    console.log('Set ASR to ' + this.asr + '.');
  }

}
