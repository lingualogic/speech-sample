import { Component, OnInit, OnDestroy } from '@angular/core';
import { BotService, ActionService } from 'speech-angular';


@Component({
  selector: 'app-show-button',
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.css']
})
export class ShowButtonComponent implements OnInit, OnDestroy {

  imageShown = false;

  constructor(
    private botService: BotService,
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.botService.addContextElement( 'show', 'imageHidden');
    this.actionService.addFunction('toggleHome', (action) => {this.show(); return 0; }, () => {this.hide(); return 0; });
    this.actionService.addFunction('showHome', (action) => {this.show(); return 0; }, () => 0);
    this.actionService.addFunction('hideHome', (action) => {this.hide(); return 0; }, () => 0);
  }

  ngOnDestroy() {
    this.actionService.removeFunction('showHome');
    this.actionService.removeFunction('hideHome');
    this.actionService.removeFunction('toggleHome');
  }

  show() {
    this.imageShown = true;
    this.botService.setStateContext({property: {imageShown: ['show']} });
    this.botService.addContextElement( 'show', 'imageShown');
    this.botService.removeContextElement( 'show', 'imageHidden');
  }

  hide() {
    this.imageShown = false;
    this.botService.setStateContext({property: {imageHidden: ['show']} });
    this.botService.removeContextElement( 'show', 'imageShown');
    this.botService.addContextElement( 'show', 'imageHidden');
  }

  toggle() {
    if (this.imageShown) {
      this.hide();
    } else {
      this.show();
    }
  }
}
