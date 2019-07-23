import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { HelpModule, HelpService } from './../help/help.module';

import { IntentComponent } from './intent.component';
import { IntentEditorComponent } from './../intent-editor/intent-editor.component';
import { IntentDialogflowComponent } from './../intent-dialogflow/intent-dialogflow.component';
import { IntentMixnluComponent } from './../intent-mixnlu/intent-mixnlu.component';
import { IntentRasaNluComponent } from './../intent-rasa-nlu/intent-rasa-nlu.component';
import { VoiceEditorComponent } from './../voice-editor/voice-editor.component';
import { NavbarComponent } from './../navbar/navbar.component';


describe('IntentComponent', () => {
    let component: IntentComponent;
    let fixture: ComponentFixture<IntentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                IntentComponent,
                VoiceEditorComponent,
                IntentEditorComponent,
                IntentDialogflowComponent,
                IntentMixnluComponent,
                IntentRasaNluComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                HelpModule
            ],
            providers: [ HelpService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent( IntentComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect( component ).toBeTruthy();
    });

});
