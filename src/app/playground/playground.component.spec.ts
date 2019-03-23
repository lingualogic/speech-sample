import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { HelpModule, HelpService } from './../help/help.module';

import { PlaygroundComponent } from './playground.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { InfoComponent } from './../info/info.component';
import { SpeakComponent } from './../speak/speak.component';
import { ListenComponent } from './../listen/listen.component';
import { ListenEditorComponent } from './../listen-editor/listen-editor.component';
import { IntentComponent } from './../intent/intent.component';
import { ActionComponent } from './../action/action.component';
import { DesignerComponent } from './../designer/designer.component';
import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';
import { VoiceEditorComponent } from './../voice-editor/voice-editor.component';
import { ShowButtonComponent } from './../show-button/show-button.component';
import { DialogComponent } from './../dialog/dialog.component';
import { BotComponent } from './../bot/bot.component';
import { BotEditorComponent } from './../bot-editor/bot-editor.component';
import { NuanceComponent } from './../nuance/nuance.component';
import { IntentEditorComponent } from './../intent-editor/intent-editor.component';


describe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaygroundComponent,
        NavbarComponent,
        InfoComponent,
        SpeakComponent,
        ListenComponent,
        ListenEditorComponent,
        IntentComponent,
        ActionComponent,
        DesignerComponent,
        SpeakEditorComponent,
        VoiceEditorComponent,
        ShowButtonComponent,
        DialogComponent,
        BotComponent,
        BotEditorComponent,
        NuanceComponent,
        IntentEditorComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        HelpModule
      ],
      providers: [ HelpService, {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
