import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { HelpModule, HelpService } from './../help/help.module';

import { SpeakComponent } from './speak.component';
import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';
import { VoiceEditorComponent } from './../voice-editor/voice-editor.component';
import { NavbarComponent } from './../navbar/navbar.component';


describe('SpeakComponent', () => {

    let component: SpeakComponent;
    let fixture: ComponentFixture<SpeakComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SpeakComponent,
                SpeakEditorComponent,
                VoiceEditorComponent,
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
        fixture = TestBed.createComponent(SpeakComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
