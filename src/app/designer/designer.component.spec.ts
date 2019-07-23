import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {APP_BASE_HREF} from '@angular/common';

import { HelpModule, HelpService } from './../help/help.module';

import { DesignerComponent } from './designer.component';
import { DialogComponent } from './../dialog/dialog.component';
import { InfoComponent } from './../info/info.component';
import { SpeakComponent } from './../speak/speak.component';
import { ListenComponent } from './../listen/listen.component';
import { ListenEditorComponent } from './../listen-editor/listen-editor.component';
import { ActionComponent } from './../action/action.component';
import { IntentComponent } from './../intent/intent.component';
import { PlaygroundComponent } from './../playground/playground.component';
import { BotComponent } from './../bot/bot.component';
import { BotEditorComponent } from './../bot-editor/bot-editor.component';
import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';
import { VoiceEditorComponent } from './../voice-editor/voice-editor.component';
import { ShowButtonComponent } from './../show-button/show-button.component';
import { NuanceComponent } from './../nuance/nuance.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { IntentEditorComponent } from './../intent-editor/intent-editor.component';
import { IntentDialogflowComponent } from './../intent-dialogflow/intent-dialogflow.component';
import { IntentMixnluComponent } from './../intent-mixnlu/intent-mixnlu.component';
import { IntentRasaNluComponent } from './../intent-rasa-nlu/intent-rasa-nlu.component';


describe('DesignerComponent', () => {
  let component: DesignerComponent;
  let fixture: ComponentFixture<DesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignerComponent,
        DialogComponent,
        InfoComponent,
        SpeakComponent,
        ListenComponent,
        ListenEditorComponent,
        IntentComponent,
        ActionComponent,
        PlaygroundComponent,
        BotComponent,
        BotEditorComponent,
        SpeakEditorComponent,
        VoiceEditorComponent,
        ShowButtonComponent,
        NuanceComponent,
        NavbarComponent,
        IntentEditorComponent,
        IntentDialogflowComponent,
        IntentMixnluComponent,
        IntentRasaNluComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        HelpModule
      ],
      providers: [ HelpService, {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
