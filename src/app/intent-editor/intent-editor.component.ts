import { Component, OnInit, ChangeDetectorRef, LOCALE_ID, Inject, EventEmitter, Output } from '@angular/core';
import { IntentService } from 'speech-angular';
import { AppLocaleService } from '../app-locale.service';


@Component({
  selector: 'app-intent-editor',
  templateUrl: './intent-editor.component.html',
  styleUrls: ['./intent-editor.component.css']
})
export class IntentEditorComponent implements OnInit {

  @Output() changeNLU = new EventEmitter<string>();
  @Output() changeLanguage = new EventEmitter<string>();

  language: string;
  nlu: string;

  constructor(
    private localeService: AppLocaleService,
    private intentService: IntentService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.language = this.localeService.localeId;
    this.setLanguage();
    this.nlu = this.intentService.nlu;
  }

  setLanguage(): void {
    this.changeLanguage.emit(this.language);
  }

  setNLU(): void {
    this.changeNLU.emit(this.nlu);
  }

}
