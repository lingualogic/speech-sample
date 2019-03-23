/**
 * Unit-Tests for HelpDirective
 */

// TODO: Write Unit-Tests
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { SpeechActionInterface } from 'speech';

import { HelpService } from './../service/help.service';
import { HelpMockService } from './../service/help-mock.service';
import {
  HelpDirective,
  HELP_SETFOCUS_ACTION,
  HELP_BUTTON_TYPE,
  HELP_CONTAINER_TYPE,
  HELP_CONTAINERGROUPTOP_TYPE,
  HELP_CONTAINERGROUPLEFT_TYPE,
  HELP_CONTAINERGROUPBOTTOM_TYPE,
  HELP_CONTENTLIST_TYPE,
  HELP_ARROW_TYPE,
  HELP_BUTTONFOCUS_CLASS,
  HELP_CONTAINERFOCUS_CLASS,
  HELP_CONTAINERGROUPFOCUS_CLASS,
  HELP_CONTENTLISTFOCUS_CLASS,
  HELP_CONTEXTMENUFOCUS_CLASS,
  HELP_SCROLLAREAFOCUS_CLASS,
  HELP_ARROWFOCUS_CLASS
} from './help.directive';

// Test Class
@Component({
  template: `<div speechHelp></div>`
})
class TestSpeechHelpComponent {}

xdescribe('Directive: SpeechHelp', () => {
  let component: TestSpeechHelpComponent;
  let fixture: ComponentFixture<TestSpeechHelpComponent>;
  let debugElement: DebugElement;
  let testDirective: HelpDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSpeechHelpComponent, HelpDirective],
      providers: [
        { provide: HelpService, useClass: HelpMockService }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TestSpeechHelpComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(HelpDirective));
    expect(debugElement).toBeTruthy();
    testDirective = debugElement.injector.get(HelpDirective);
  });

  it('should create an instance', () => {
    expect(testDirective).toBeTruthy();
  });

  // startAction
  describe('call startAction', () => {

    it('should exist Action', () => {
      expect(testDirective.startAction).toBeTruthy();
    });

    /*
    it('should run Action', () => {
      const action: SpeechActionInterface = {
        event: 'action',
        action: HELP_SETFOCUS_ACTION,
        type: HELP_BUTTON_TYPE,
        id: ''
      };
      testDirective.startAction(action);
    });
    */

  });

  // stopAction
  describe('call stopAction', () => {

    it('should exist Action', () => {
      expect(testDirective.stopAction).toBeTruthy();
    });

    it('should run Action', () => {
      testDirective.stopAction();
    });

  });

  // getFocusClass
  describe('call getFocusClass', () => {

    it('should get button type', () => {
      expect(testDirective.getFocusClass(HELP_BUTTON_TYPE))
        .toEqual(HELP_BUTTONFOCUS_CLASS);
    });

    it('should get container type', () => {
      expect(testDirective.getFocusClass(HELP_CONTAINER_TYPE))
        .toEqual(HELP_CONTAINERFOCUS_CLASS);
      expect(testDirective.getFocusClass(HELP_CONTAINERGROUPTOP_TYPE))
        .toEqual(HELP_CONTAINERFOCUS_CLASS);
    });

    it('should get container group type', () => {
      expect(testDirective.getFocusClass(HELP_CONTAINERGROUPLEFT_TYPE))
        .toEqual(HELP_CONTAINERGROUPFOCUS_CLASS);
    });

    it('should get container menu type', () => {
      expect(testDirective.getFocusClass(HELP_CONTAINERGROUPBOTTOM_TYPE))
        .toEqual(HELP_CONTEXTMENUFOCUS_CLASS);
    });

    it('should get content list type', () => {
      expect(testDirective.getFocusClass(HELP_CONTENTLIST_TYPE))
        .toEqual(HELP_CONTENTLISTFOCUS_CLASS);
    });

    it('should get arrow type', () => {
      expect(testDirective.getFocusClass(HELP_ARROW_TYPE))
        .toEqual(HELP_SCROLLAREAFOCUS_CLASS);
    });

  });

  // _startSpeakFocusAnimation
  describe('call _startSpeakFocusAnimation', () => {

    it('should run with arrow type', () => {
      testDirective._startSpeakFocusAnimation(HELP_ARROW_TYPE);
    });

    it('should run with arrow type', () => {
      testDirective._startSpeakFocusAnimation(HELP_BUTTON_TYPE);
    });

  });

  // _stopSpeakFocusAnimation
  describe('call _startSpeakFocusAnimation', () => {

    it('should run, without call _startSpeakAnimation', () => {
      testDirective._stopSpeakFocusAnimation();
    });

    it('should run, with call _startSpeakAnimation(HELP_BUTTON_TYPE)', () => {
      testDirective._startSpeakFocusAnimation(HELP_BUTTON_TYPE);
      testDirective._stopSpeakFocusAnimation();
    });

    it('should run, with call _startSpeakAnimation(HELP_ARROW_TYPE)', () => {
      testDirective._startSpeakFocusAnimation(HELP_ARROW_TYPE);
      testDirective._stopSpeakFocusAnimation();
    });

  });

  // _showSrollArea
  describe('call _showScrollArea', () => {

    it('should run', () => {
      testDirective._showScrollArea();
    });

  });

  // _hideSrollArea
  describe('call _hideScrollArea', () => {

    it('should run without call _showScrollArea', () => {
      testDirective._hideScrollArea();
    });

    it('should run with call _showScrollArea', () => {
      testDirective._showScrollArea();
      testDirective._hideScrollArea();
    });

  });

});
