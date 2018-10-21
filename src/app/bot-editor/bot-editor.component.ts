import { Component, OnInit, ChangeDetectorRef, Input, OnDestroy } from '@angular/core';

import { BotService } from 'speech-angular';

@Component({
  selector: 'app-bot-editor',
  templateUrl: './bot-editor.component.html',
  styleUrls: ['./bot-editor.component.css']
})
export class BotEditorComponent implements OnInit, OnDestroy {

  @Input() name;
  parseEvent: any;
  stateEvent: any;

  stateName: string;
  dialogName: string;

  constructor(
    private ref: ChangeDetectorRef,
    private botService: BotService
  ) { }

  ngOnInit() {
    this.dialogName = this.botService.dialog;
    this.stateName = this.botService.state;

    this.parseEvent = this.botService.parseEvent.subscribe(() => {
      const message = 'Dialog parsed.';
      console.log(message);
      // this.messages.push(message);
      this.setStateName();
      // this.ref.detectChanges();
    });

    this.stateEvent = this.botService.setStateEvent.subscribe(text => {
      this.stateName = text;
      const message = 'State set to ' + text + '.';
      console.log(message);
      // this.messages.push(message);
      // this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    this.parseEvent.unsubscribe();
    this.stateEvent.unsubscribe();
  }

  setStateName(): void {
    console.log('Set State...');
    this.botService.state = this.stateName;
  }

  setDialogName(): void {
    console.log('Set Dialog...');
    this.botService.dialog = this.dialogName;
  }

}
