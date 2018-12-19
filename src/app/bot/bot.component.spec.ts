import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BotComponent } from './bot.component';
import { BotEditorComponent } from './../bot-editor/bot-editor.component';
import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';
import { VoiceEditorComponent } from './../voice-editor/voice-editor.component';
import { ShowButtonComponent } from './../show-button/show-button.component';

describe('BotComponent', () => {
  let component: BotComponent;
  let fixture: ComponentFixture<BotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BotComponent,
        BotEditorComponent,
        SpeakEditorComponent,
        VoiceEditorComponent,
        ShowButtonComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
