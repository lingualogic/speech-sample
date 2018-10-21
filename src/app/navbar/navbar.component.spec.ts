import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';

import { NavbarComponent } from './navbar.component';
import { InfoComponent } from './../info/info.component';
import { SpeakComponent } from './../speak/speak.component';
import { ListenComponent } from './../listen/listen.component';
import { ActionComponent } from './../action/action.component';
import { DesignerComponent } from './../designer/designer.component';
import { PlaygroundComponent } from './../playground/playground.component';
import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';
import { ShowButtonComponent } from './../show-button/show-button.component';
import { DialogComponent } from './../dialog/dialog.component';
import { BotComponent } from './../bot/bot.component';
import { BotEditorComponent } from './../bot-editor/bot-editor.component';

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
        ActionComponent,
        DesignerComponent,
        PlaygroundComponent,
        SpeakEditorComponent,
        ShowButtonComponent,
        DialogComponent,
        BotComponent,
        BotEditorComponent
      ],
      imports: [
        FormsModule,
        AppRoutingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
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
