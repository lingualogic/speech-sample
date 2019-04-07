import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { ListenService } from 'speech-angular';

@Component({
  selector: 'app-listen-editor',
  templateUrl: './listen-editor.component.html',
  styleUrls: ['./listen-editor.component.css']
})
export class ListenEditorComponent implements OnInit {

  language: string;
  asr: string;

  constructor(
    @Inject(LOCALE_ID) private localeId: string,
    private listenService: ListenService) { }

  ngOnInit() {
    this.language = this.localeId;
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
