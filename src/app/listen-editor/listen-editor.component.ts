import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private ref: ChangeDetectorRef,
    private listenService: ListenService) { }

  ngOnInit() {
    this.language = this.listenService.language;
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
