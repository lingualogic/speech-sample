import { Component, OnInit, ChangeDetectorRef, LOCALE_ID, Inject } from '@angular/core';
import { IntentService } from 'speech-angular';

@Component({
  selector: 'app-intent-editor',
  templateUrl: './intent-editor.component.html',
  styleUrls: ['./intent-editor.component.css']
})
export class IntentEditorComponent implements OnInit {

  language: string;
  nlu: string;

  constructor(
    private ref: ChangeDetectorRef,
    @Inject(LOCALE_ID) private localeId: string,
    private intentService: IntentService
  ) { }

  ngOnInit() {
    this.language = this.localeId;
    this.setLanguage();
    this.nlu = this.intentService.nlu;
  }

  setLanguage(): void {
    this.intentService.language = this.language;
    console.log('Set Language to ' + this.language + '.');
  }

  setNLU(): void {
    this.intentService.nlu = this.nlu;
    console.log('Set NLU to ' + this.nlu + '.');
  }

}
