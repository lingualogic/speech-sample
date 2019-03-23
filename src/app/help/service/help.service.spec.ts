/**
 * Unit-Test for HelpService
 */

import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HelpConfigInterface } from './help-config.interface';
import { HelpService } from './help.service';
import { HelpMockRouter } from './help-mock.router';

xdescribe('HelpService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HelpService,
        { provide: Router, useClass: HelpMockRouter }
      ]
    });
  });

  // init
  describe('call init', () => {

    it('should be created', inject([HelpService, Router],
        (helpService: HelpService) => {
        expect(helpService).toBeTruthy();
    }));

    it('should return 0, if init double, no config', inject([HelpService, Router],
      (helpService: HelpService) => {
        expect(helpService.init()).toBe(0);
        expect(helpService.init()).toBe(0);
    }));

    it('should return 0, if init with config', inject([HelpService, Router],
      (helpService: HelpService) => {
        const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      expect(helpService.init(config)).toBe(0);
    }));

  });

  // toggle

  describe('call toggle', () => {

    it('should return -1, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.toggle()).toBe(-1);
    }));

    it('should return 0, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.toggle()).toBe(0);
    }));

  });

  // stop

  describe('call stop', () => {

    it('should return -1, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.stop()).toBe(-1);
    }));

    it('should return 0, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.stop()).toBe(0);
    }));

  });

  // isInit

  describe('call isInit', () => {

    it('should return false, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.isInit()).toBeFalsy();
    }));

    // TODO: Test not valid, if async Function init, isInit must wait.
    xit('should return true, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      // TODO: Hier unterscheiden sich karma und Jest, Jest liefert false !
      expect(helpService.isInit()).toBeTruthy();
    }));

  });

  // isActive

  describe('call isActive', () => {

    it('should return false, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.isActive()).toBeFalsy();
    }));

    it('should return false, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.isActive()).toBeFalsy();
    }));

  });

  // setControllerState

  describe('call setControllerState', () => {

    it('should return -1, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.setControllerState('testState')).toBe(-1);
    }));

    it('should return 0, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.setControllerState('testState')).toBe(0);
    }));

  });

  // setControllerSubState

  describe('call setControllerSubState', () => {

    it('should return -1, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.setControllerSubState('testSubState')).toBe(-1);
    }));

    it('should return -1, if init call and no state', inject([HelpService, Router],
      (helpService: HelpService) => {
        const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.setControllerState('')).toBe(0);
      expect(helpService.setControllerSubState('testSubState')).toBe(-1);
    }));

    it('should return 0, if init call and state', inject([HelpService, Router],
      (helpService: HelpService) => {
        const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.setControllerState('testState')).toBe(0);
      expect(helpService.setControllerSubState('testSubState')).toBe(0);
    }));

  });

/****

// createSpeechItem

  describe('call createSpeechItem', () => {

    it('should return null, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.createSpeechItem()).toBeNull();
    }));

    it('should return speech item, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
        const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.createSpeechItem()).toBeTruthy();
    }));

  });

  // initEvent

  describe('call initEvent', () => {

    it('should return null, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.initEvent).toBeNull();
    }));

    it('should return init event, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
        const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.initEvent).toBeTruthy();
    }));

  });

  // activeEvent

  describe('call activeEvent', () => {

    it('should return null, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.activeEvent).toBeNull();
    }));

    it('should return active event, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
        const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.activeEvent).toBeTruthy();
    }));

  });

  // deactiveEvent

  describe('call deactiveEvent', () => {

    it('should return null, if no init call', inject([HelpService, Router],
      (helpService: HelpService) => {
      helpService.done();
      expect(helpService.deactiveEvent).toBeNull();
    }));

    it('should return active event, if init call', inject([HelpService, Router],
      (helpService: HelpService) => {
        const config: HelpConfigInterface = {
        rootState: 'home',
        dialogPath: 'assets/',
        audioFlag: false
      };
      helpService.done();
      expect(helpService.init(config)).toBe(0);
      expect(helpService.deactiveEvent).toBeTruthy();
    }));

  });

****/

});
