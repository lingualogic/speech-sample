import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { HelpModule, HelpService } from './../help/help.module';

import { NavbarComponent } from './navbar.component';
import { InfoComponent } from './../info/info.component';
import { SpeakComponent } from './../speak/speak.component';
import { ListenComponent } from './../listen/listen.component';
import { ListenEditorComponent } from './../listen-editor/listen-editor.component';
import { IntentComponent } from './../intent/intent.component';
import { ActionComponent } from './../action/action.component';
import { DesignerComponent } from './../designer/designer.component';
import { PlaygroundComponent } from './../playground/playground.component';
import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';
import { VoiceEditorComponent } from './../voice-editor/voice-editor.component';
import { ShowButtonComponent } from './../show-button/show-button.component';
import { DialogComponent } from './../dialog/dialog.component';
import { BotComponent } from './../bot/bot.component';
import { BotEditorComponent } from './../bot-editor/bot-editor.component';
import { NuanceComponent } from './../nuance/nuance.component';
import { IntentEditorComponent } from './../intent-editor/intent-editor.component';
import { IntentDialogflowComponent } from './../intent-dialogflow/intent-dialogflow.component';
import { IntentMixnluComponent } from './../intent-mixnlu/intent-mixnlu.component';
import { IntentRasaNluComponent } from './../intent-rasa-nlu/intent-rasa-nlu.component';
import { IntentMicrosoftComponent } from './../intent-microsoft/intent-microsoft.component';


describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavbarComponent,
                InfoComponent,
                SpeakComponent,
                ListenComponent,
                ListenEditorComponent,
                IntentComponent,
                ActionComponent,
                DesignerComponent,
                PlaygroundComponent,
                SpeakEditorComponent,
                VoiceEditorComponent,
                ShowButtonComponent,
                DialogComponent,
                BotComponent,
                BotEditorComponent,
                NuanceComponent,
                IntentEditorComponent,
                IntentDialogflowComponent,
                IntentMixnluComponent,
                IntentRasaNluComponent,
                IntentMicrosoftComponent
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
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
