/**
 * Help Directive for all Help-Action Components
 */

import {
  Directive, Input, HostListener, HostBinding, Renderer2, ElementRef,
  OnInit, OnDestroy
} from '@angular/core';

import { ActionServiceDataInterface } from 'speech-angular';
import { HelpService } from './../service/help.service';

// Mapping CSS-Classes to Speech.Def Dialog ID-Names
// TODO: think for better solution

// Actions Constants
// ActionFunctions
export const HELP_SETFOCUS_ACTION = 'setFocus';

// TODO: Revision der Typen !
// Itemtype Constants

export const HELP_NAVLINK_TYPE = 'NavLink';

export const HELP_BUTTON_TYPE = 'ButtonOnly';
export const HELP_CONTAINER_TYPE = 'ContainerOnly';
export const HELP_CONTAINERGROUPTOP_TYPE = 'ContainerGroupTop';
export const HELP_CONTAINERGROUPLEFT_TYPE = 'ContainerGroupLeft';
export const HELP_CONTAINERGROUPBOTTOM_TYPE = 'ContainerGroupBottom';
export const HELP_CONTENTLIST_TYPE = 'ButtonGroupSimilar';
export const HELP_ARROW_TYPE = 'Arrow';
export const HELP_ARROWHORIZONTAL_TYPE = 'ArrowHorizontal';

// CSS-Class Constants

export const HELP_NAVLINK_CLASS = 'help-focus-navlink';

export const HELP_BUTTONFOCUS_CLASS = 'help-focus-button';
export const HELP_CONTAINERFOCUS_CLASS = 'help-focus-container';
export const HELP_CONTAINERGROUPFOCUS_CLASS = 'help-focus-container';
export const HELP_CONTENTLISTFOCUS_CLASS = 'help-focus-list';
export const HELP_CONTEXTMENUFOCUS_CLASS = 'help-focus-contextmenu';
export const HELP_SCROLLAREAFOCUS_CLASS = 'help-focus-scrollarea';
export const HELP_ARROWFOCUS_CLASS = 'help-focus-arrow';
export const HELP_ARROWHORIZONTAL_CLASS = 'horizontal';

const HELP_SCROLLABLE_TYPE = 'scrollable';
const HELP_OPTIONAL_TYPE = 'optional';

/**
 * HelpDirective Class to insert in Items for Help-Animation
 */
@Directive({
  selector: '[speechHelp]'
})
export class HelpDirective implements OnInit, OnDestroy {

  /**
   * Save help name, to identification the ItemComponent for Actions
   */
  @Input('speechHelp') helpName = '';

  /**
   * Set help if it scrollable
   */
  @Input('speechHelpScrollable') set helpContextScrollable(helpScrollableFlag: boolean) {
    // console.nepos('HelpDirective.helpContextScrollable:', this.helpName, helpScrollableFlag);
    this.helpService.setContextItem(this.helpName, HELP_SCROLLABLE_TYPE, helpScrollableFlag);
  }

  /**
   * Set help optional
   */
  @Input('speechHelpOptional') set helpContextOptional(helpOptionalFlag: boolean) {
    // console.nepos('HelpDirective.helpContextOptional:', this.helpName, helpOptionalFlag);
    this.helpService.setContextItem(this.helpName, HELP_OPTIONAL_TYPE, helpOptionalFlag);
  }

  /**
   * Focus class for the button
   */
  private mFocusClass: string = HELP_BUTTONFOCUS_CLASS;

  /**
   * Focus class for the button
   */
  private mStopAction: any = null;

  /**
   * Focus class for the button
   */
  private mHelpScrollArea: HTMLDivElement = null;

  /**
   * Constructor to setup the store service
   */
  constructor(
    private helpService: HelpService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    // no bind functions in this code necessary
  }

  /**
   * Init methods
   */
  ngOnInit(): void {
    // insert Functions for Action
    this.helpService.insertItemAction(this.helpName,
      (aAction: ActionServiceDataInterface) => { this.startAction(aAction); },
      () => { this.stopAction(); });
  }

  /**
   * Destroy methods
   */
  ngOnDestroy(): void {
    // remove Functions for Action
    this.helpService.removeItemAction(this.helpName);
  }

  /**
   * Button Clicks for ending Help
   */
  @HostListener('click') onClick() {
    this.helpService.stop();
  }

  /**
   * Event for help scrollbar changed from host component
   * @param  $event - Event parameter
   */
  @HostListener('help-scrollable', ['$event']) onHelpScrollable($event) {
    // console.nepos('HelpDirective.onHelpScrollable:', this.helpName, $event.scrollableFlag);
    this.helpService.setContextItem(this.helpName, HELP_SCROLLABLE_TYPE, $event.scrollableFlag);
  }

  /**
   * Event for help optional changed from host component
   * @param  $event - Event parameter
   */
  @HostListener('help-optional', ['$event']) onHelpOptional($event) {
    // console.nepos('HelpDirective.onHelpOptional:', this.helpName, $event.optionalFlag);
    this.helpService.setContextItem(this.helpName, HELP_OPTIONAL_TYPE, $event.optionalFlag);
  }

  /**
   * Check, if help active
   */
  get isHelpActive(): boolean {
    return this.helpService.isActive();
  }

  // Action functions (public)

  /**
   * Run specified Action
   *
   * @param aAction - action object
   */
  startAction(aAction: ActionServiceDataInterface): void {
    console.log('HelpDirective: startAction:', aAction);

    // Select desired action
    // Add here more actions if needed
    switch (aAction.action) {
      case HELP_SETFOCUS_ACTION:
        this._startSpeakFocusAnimation(aAction.type);
        break;
      default:
        break;
    }
  }

  /**
   * Stop  action
   */
  stopAction(): void {
    if (typeof this.stopAction === 'function') {
      this.stopAction();
    }
  }

  /**
   * Selected CSS-Class with ItemType from Action
   *
   * @param aType - ItemType
   */
  getFocusClass(aType: string): string {
    let focusClass = HELP_BUTTONFOCUS_CLASS;
    switch (aType) {
      case HELP_NAVLINK_TYPE:
        focusClass = HELP_NAVLINK_CLASS;
        break;
      case HELP_BUTTON_TYPE:
        focusClass = HELP_BUTTONFOCUS_CLASS;
        break;
      case HELP_CONTAINER_TYPE:
        focusClass = HELP_CONTAINERFOCUS_CLASS;
        break;
      case HELP_CONTAINERGROUPTOP_TYPE:
        focusClass = HELP_CONTAINERFOCUS_CLASS;
        break;
      case HELP_CONTAINERGROUPLEFT_TYPE:
        focusClass = HELP_CONTAINERGROUPFOCUS_CLASS;
        break;
      case HELP_CONTAINERGROUPBOTTOM_TYPE:
        focusClass = HELP_CONTEXTMENUFOCUS_CLASS;
        break;
      case HELP_CONTENTLIST_TYPE:
        focusClass = HELP_CONTENTLISTFOCUS_CLASS;
        break;
      // at the moment both types have the same class
      case HELP_ARROW_TYPE:
      case HELP_ARROWHORIZONTAL_TYPE:
        focusClass = HELP_SCROLLAREAFOCUS_CLASS;
        break;
      default:
        break;
    }
    // console.nepos('HelpDirective.getFocusClass:', focusClass);
    return focusClass;
  }

  // Focus functions (private)

  /**
   * Focus animation
   */

  _startSpeakFocusAnimation(aType: string): void {
    // tslint:disable-next-line max-line-length
    console.log('HelpDirective.startSpeakFocusAnimation:', aType, this.getFocusClass(aType), this.helpName);
    if (aType === HELP_ARROW_TYPE) {
      this._showScrollArea();
      this.stopAction = this._hideScrollArea;
      return;
    }
    if (aType === HELP_ARROWHORIZONTAL_TYPE) {
      this._showScrollArea(true);
      this.stopAction = this._hideScrollArea;
      return;
    }
    this.mFocusClass = this.getFocusClass(aType);
    this.renderer.addClass(this.elementRef.nativeElement, this.mFocusClass);
    this.stopAction = this._stopSpeakFocusAnimation;
  }

  _stopSpeakFocusAnimation(): void {
    // console.nepos('HelpDirective.stopSpeakFocusAnimation:', this.helpName);
    this.renderer.removeClass(this.elementRef.nativeElement, this.mFocusClass);
  }

  /**
   * Show scroll arrow
   */
  _showScrollArea( horizontalMode = false ): void {
    // console.nepos( 'HelpDirective.showScrollArea');
    this.mHelpScrollArea = this.renderer.createElement('div');
    const helpArrow = this.renderer.createElement('div');
    // console.nepos( 'HelpScrollArea.init:', this._helpScrollArea);
    // console.nepos( 'HelpScrollArrow.init:', helpArrow);
    // Attach the id to the scrollable area wrapper
    this.renderer.addClass(this.mHelpScrollArea, HELP_SCROLLAREAFOCUS_CLASS);
    // Add the class for the arrow
    this.renderer.addClass( helpArrow, HELP_ARROWFOCUS_CLASS);
    // Add horizontal if flag is true
    if (horizontalMode) {
      console.log('HelpDirective._showScrollArea: horizontal arrow');
      this.renderer.addClass( helpArrow, HELP_ARROWHORIZONTAL_CLASS);
    }
    // Append the arrow the wrapper
    // console.nepos( 'HelpScrollArea.addClass:', this._helpScrollArea);
    // console.nepos( 'HelpScrollArrow.addClass:', helpArrow);
    this.renderer.appendChild(this.mHelpScrollArea, helpArrow);
    // console.nepos( 'HelpScrollArea.appendChild:', this._helpScrollArea);
    // Append it to the target
    this.renderer.appendChild(this.elementRef.nativeElement, this.mHelpScrollArea);
    // console.nepos( 'HelpScrollArea.appendChild:', this.elementRef.nativeElement);
  }

  /**
   * Hide scroll arrow
   */
  _hideScrollArea(): void {
    // console.log( 'HelpDirective.hideScrollArea');
    if (this.mHelpScrollArea) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.mHelpScrollArea);
    }
  }

}
