import { EventEmitter } from '@angular/core';
// import { SpeechItemInterface, SpeechActionInterface } from 'speech';
import { HelpConfigInterface } from './help-config.interface';

const speechItemInstance = {
  speechName: '',
  onStartAction: (aAction: any) => { /* Linter empty fix */ },
  onStopAction: () => { /* Linter empty fix */ },
  isRunAction: () => false,
  insertAction: () => 0,
  removeAction: () => 0,
  setContextItem: (aContextType: string, aContextFlag: boolean) => 0
};

// Mock Class for HelpService

export class HelpMockService {

  initResult = 0;
  isInitFlag = false;
  isActiveFlag = false;
  speechItem = speechItemInstance;

  /**
   * activate help event emitter
   */
  activeEvent: EventEmitter<any> = new EventEmitter();

  /**
   * deactivate help event emitter
   */
  deactiveEvent: EventEmitter<any> = new EventEmitter();

  // Service API

  init(helpConfig?: HelpConfigInterface): number {
    // To make the linter happy (tslint: block is empty)
    return this.initResult;
  }

  stop(): void {
    // To make the linter happy (tslint: block is empty)
  }

  toggle(): void {
    // To make the linter happy (tslint: block is empty)
  }

  isInit(): boolean { return this.isInitFlag; }

  isActive(): boolean { return this.isActiveFlag; }

  setControllerState(aStateName: string): void {
    // To make the linter happy (tslint: block is empty)
  }

  createSpeechItem(): any {
    return this.speechItem;
  }

  insertItemAction(itemName: string, startAction: (action: any) => void, stopAction: () => void ): number {
    return 0;
  }

  removeItemAction(itemName: string): number {
    return 0;
  }

  setContextItem( itemName: string, contextType: string, contextFlag: boolean ): number {
    return 0;
  }

}
