/**
 * Animate Directive
 */

import { Directive, Input, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';


import { ActionService, BotServiceActionInterface } from 'speech-angular';


// ActionFunctions
const ANIMATE_FUNCTION_NAME = 'animate';

// Itemtype Constants
const ANIMATE_BUTTON_TYPE = 'Button';

// CSS-Class Constants
const ANIMATE_BUTTON_CLASS = 'animate-focus-button';


@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective implements OnInit, OnDestroy {

  // SpeechItem Delegate
  private speechName: string;
  @Input('appAnimate') set animateName(name: string) {
    this.speechName = name;
  }

  // Funktionen
  private _stopAction = null;

  /**
   * Constructor to setup the store service
   *
   * @param {ActionService} actionService
   * @param {Renderer2} renderer
   * @param {ElementRef} elementRef
   */
  constructor(
    private actionService: ActionService,
    private renderer: Renderer2,
    private elementRef: ElementRef) { }

  /**
   * Init methods
   */
  ngOnInit() {
    // console.log('animateDirective: ngOnInit:', this.speechName);
    const onStartAction = (aAction: BotServiceActionInterface) => { this.startAction(aAction); return 0; };
    const onStopAction = () => { this.stopAction(); return 0; };

    this.actionService.addElement( this.speechName, onStartAction, onStopAction);
  }

  /**
   * Destroy methods
   */
ngOnDestroy() {
    // remove Functions for Actions
    // console.log('animateDirective: ngOnDestroy:', this.speechName);
    this.actionService.removeElement(this.speechName);
}

  /**
   * Run specified Action
   * @param {SpeechActionInterface} aAction - action object
   */
  startAction(aAction: BotServiceActionInterface): void {
    console.log('AnimateDirective: startAction:', aAction);

    // Select desired action
    // Add here more actions if needed
    switch (aAction.action) {
      case ANIMATE_FUNCTION_NAME:
        this._startAnimation(aAction.type);
        break;
      default:
        break;
    }
  }

  /**
   * Stopaction
   */
  stopAction() {
    if (typeof this._stopAction === 'function') {
      this._stopAction();
    }
  }

  /**
   * Animation
   */
  _startAnimation(aType: string) {
    this.renderer.addClass(this.elementRef.nativeElement, ANIMATE_BUTTON_CLASS);
    this._stopAction = this._stopAnimation;
  }

  _stopAnimation() {
    this.renderer.removeClass(this.elementRef.nativeElement, ANIMATE_BUTTON_CLASS);
  }

}
